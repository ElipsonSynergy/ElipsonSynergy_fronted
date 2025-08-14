// Firebase functions for blogs management with internationalization
import { collection, getDocs, doc, getDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { adminDb } from './firebaseAdmin';
import type { FirebaseBlog, LocalizedBlog, SupportedLanguage } from '../types/firebase';

const COLLECTION_NAME = 'blogs';

// Helper function to convert Firestore timestamp to ISO string
function toIso(timestamp: any): string {
  if (!timestamp) return new Date().toISOString();
  if (timestamp?.toDate) return timestamp.toDate().toISOString();
  if (typeof timestamp === 'string') return timestamp;
  return new Date().toISOString();
}

// Client-side functions (for build time / SSG)
export async function getAllBlogs(): Promise<FirebaseBlog[]> {
  try {
    const blogsCollection = collection(db, COLLECTION_NAME);
    const blogsQuery = query(
      blogsCollection, 
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const blogsSnapshot = await getDocs(blogsQuery);
    
    const blogs: FirebaseBlog[] = [];
    blogsSnapshot.forEach((doc) => {
      const data = doc.data();
      blogs.push({
        id: doc.id,
        ...data,
      } as FirebaseBlog);
    });
    
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<FirebaseBlog | null> {
  try {
    const blogsCollection = collection(db, COLLECTION_NAME);
    const blogQuery = query(
      blogsCollection,
      where('slug', '==', slug),
      where('published', '==', true)
    );
    const blogSnapshot = await getDocs(blogQuery);
    
    if (!blogSnapshot.empty) {
      const doc = blogSnapshot.docs[0];
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
      } as FirebaseBlog;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
}

export async function getBlogById(id: string): Promise<FirebaseBlog | null> {
  try {
    const blogDoc = doc(db, COLLECTION_NAME, id);
    const blogSnapshot = await getDoc(blogDoc);
    
    if (blogSnapshot.exists()) {
      const data = blogSnapshot.data();
      return {
        id: blogSnapshot.id,
        ...data,
      } as FirebaseBlog;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog by id:', error);
    return null;
  }
}

// Server-side functions (for SSR)
export async function getAllBlogsServer(): Promise<FirebaseBlog[]> {
  try {
    const blogsCollection = adminDb.collection(COLLECTION_NAME);
    const blogsQuery = blogsCollection
      .where('published', '==', true)
      .orderBy('createdAt', 'desc');
    
    const blogsSnapshot = await blogsQuery.get();
    
    const blogs: FirebaseBlog[] = [];
    blogsSnapshot.forEach((doc) => {
      const data = doc.data();
      blogs.push({
        id: doc.id,
        ...data,
      } as FirebaseBlog);
    });
    
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs (server):', error);
    return [];
  }
}

export async function getBlogBySlugServer(slug: string): Promise<FirebaseBlog | null> {
  try {
    const blogsCollection = adminDb.collection(COLLECTION_NAME);
    const blogQuery = blogsCollection
      .where('slug', '==', slug)
      .where('published', '==', true)
      .limit(1);
    
    const blogSnapshot = await blogQuery.get();
    
    if (!blogSnapshot.empty) {
      const doc = blogSnapshot.docs[0];
      const data = doc.data();
      if (!data) return null;
      
      return {
        id: doc.id,
        ...data,
      } as FirebaseBlog;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog by slug (server):', error);
    return null;
  }
}

export async function getBlogByIdServer(id: string): Promise<FirebaseBlog | null> {
  try {
    const blogDoc = adminDb.collection(COLLECTION_NAME).doc(id);
    const blogSnapshot = await blogDoc.get();
    
    if (blogSnapshot.exists) {
      const data = blogSnapshot.data();
      if (!data) return null;
      
      return {
        id: blogSnapshot.id,
        ...data,
      } as FirebaseBlog;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog by id (server):', error);
    return null;
  }
}

// Helper functions for localization
export function localizeBlog(blog: FirebaseBlog, lang: SupportedLanguage): LocalizedBlog {
  return {
    id: blog.id || '',
    slug: blog.slug,
    title: blog.title[lang],
    summary: blog.summary[lang],
    content: blog.content[lang],
    imageUrl: blog.imageUrl,
    author: blog.author,
    tags: blog.tags[lang],
    published: blog.published,
    featured: blog.featured,
    createdAt: toIso(blog.createdAt),
    updatedAt: toIso(blog.updatedAt)
  };
}

export function localizeBlogs(blogs: FirebaseBlog[], lang: SupportedLanguage): LocalizedBlog[] {
  return blogs.map(blog => localizeBlog(blog, lang));
}

export function getFeaturedBlogs(blogs: FirebaseBlog[], lang: SupportedLanguage): LocalizedBlog[] {
  const featured = blogs.filter(blog => blog.featured);
  return localizeBlogs(featured, lang);
}

// Compatibility layer - to maintain the same interface as the original blog implementation
export async function getLocalizedBlogs(lang: SupportedLanguage): Promise<LocalizedBlog[]> {
  const firebaseBlogs = await getAllBlogsServer();
  return localizeBlogs(firebaseBlogs, lang);
}

export async function getLocalizedBlogBySlug(slug: string, lang: SupportedLanguage): Promise<LocalizedBlog | null> {
  const firebaseBlog = await getBlogBySlugServer(slug);
  if (!firebaseBlog) return null;
  return localizeBlog(firebaseBlog, lang);
}

export async function getLocalizedBlogById(id: string, lang: SupportedLanguage): Promise<LocalizedBlog | null> {
  const firebaseBlog = await getBlogByIdServer(id);
  if (!firebaseBlog) return null;
  return localizeBlog(firebaseBlog, lang);
}

export async function getLocalizedFeaturedBlogs(lang: SupportedLanguage): Promise<LocalizedBlog[]> {
  const firebaseBlogs = await getAllBlogsServer();
  return getFeaturedBlogs(firebaseBlogs, lang);
}
