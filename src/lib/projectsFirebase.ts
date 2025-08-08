// Firebase functions for projects management
import { collection, getDocs, doc, getDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { adminDb } from './firebaseAdmin';
import type { FirebaseProject, LocalizedProject, SupportedLanguage } from '../types/firebase';

const COLLECTION_NAME = 'projects';

// Client-side functions (for build time / SSG)
export async function getAllProjects(): Promise<FirebaseProject[]> {
  try {
    const projectsCollection = collection(db, COLLECTION_NAME);
    const projectsQuery = query(
      projectsCollection, 
      where('active', '==', true),
      orderBy('createdAt', 'desc')
    );
    const projectsSnapshot = await getDocs(projectsQuery);
    
    const projects: FirebaseProject[] = [];
    projectsSnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push({
        id: doc.id,
        ...data,
      } as FirebaseProject);
    });
    
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<FirebaseProject | null> {
  try {
    const projectDoc = doc(db, COLLECTION_NAME, id);
    const projectSnapshot = await getDoc(projectDoc);
    
    if (projectSnapshot.exists()) {
      const data = projectSnapshot.data();
      return {
        id: projectSnapshot.id,
        ...data,
      } as FirebaseProject;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

// Server-side functions (for SSR)
export async function getAllProjectsServer(): Promise<FirebaseProject[]> {
  try {
    const projectsCollection = adminDb.collection(COLLECTION_NAME);
    const projectsQuery = projectsCollection
      .where('active', '==', true)
      .orderBy('createdAt', 'desc');
    
    const projectsSnapshot = await projectsQuery.get();
    
    const projects: FirebaseProject[] = [];
    projectsSnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push({
        id: doc.id,
        ...data,
      } as FirebaseProject);
    });
    
    return projects;
  } catch (error) {
    console.error('Error fetching projects (server):', error);
    return [];
  }
}

export async function getProjectByIdServer(id: string): Promise<FirebaseProject | null> {
  try {
    const projectDoc = adminDb.collection(COLLECTION_NAME).doc(id);
    const projectSnapshot = await projectDoc.get();
    
    if (projectSnapshot.exists) {
      const data = projectSnapshot.data();
      if (!data) return null;
      
      return {
        id: projectSnapshot.id,
        ...data,
      } as FirebaseProject;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching project (server):', error);
    return null;
  }
}

// Helper functions for localization
export function localizeProject(project: FirebaseProject, lang: SupportedLanguage): LocalizedProject {
  return {
    id: project.id || '',
    title: project.title[lang],
    description: project.description[lang],
    image: project.image,
    category: project.category,
    tags: project.tags[lang],
    featured: project.featured,
    active: project.active
  };
}

export function localizeProjects(projects: FirebaseProject[], lang: SupportedLanguage): LocalizedProject[] {
  return projects.map(project => localizeProject(project, lang));
}

export function getProjectsByCategory(projects: FirebaseProject[], category: string, lang: SupportedLanguage): LocalizedProject[] {
  const filtered = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);
  
  return localizeProjects(filtered, lang);
}

export function getFeaturedProjects(projects: FirebaseProject[], lang: SupportedLanguage): LocalizedProject[] {
  const featured = projects.filter(project => project.featured);
  return localizeProjects(featured, lang);
}

// Compatibility layer - to maintain the same interface as projects-i18n.ts
export async function getLocalizedProjects(lang: SupportedLanguage): Promise<LocalizedProject[]> {
  const firebaseProjects = await getAllProjectsServer();
  return localizeProjects(firebaseProjects, lang);
}

export async function getLocalizedProjectsByCategory(category: string, lang: SupportedLanguage): Promise<LocalizedProject[]> {
  const firebaseProjects = await getAllProjectsServer();
  return getProjectsByCategory(firebaseProjects, category, lang);
}

export async function getLocalizedFeaturedProjects(lang: SupportedLanguage): Promise<LocalizedProject[]> {
  const firebaseProjects = await getAllProjectsServer();
  return getFeaturedProjects(firebaseProjects, lang);
}
