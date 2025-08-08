// Firebase functions for members management
import { collection, getDocs, doc, getDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { adminDb } from './firebaseAdmin';
import type { FirebaseMember, LocalizedMember, SupportedLanguage } from '../types/firebase';

const COLLECTION_NAME = 'members';

// Client-side functions (for build time / SSG)
export async function getAllMembers(): Promise<FirebaseMember[]> {
  try {
    const membersCollection = collection(db, COLLECTION_NAME);
    const membersQuery = query(
      membersCollection, 
      where('active', '==', true),
      orderBy('order', 'asc')
    );
    const membersSnapshot = await getDocs(membersQuery);
    
    const members: FirebaseMember[] = [];
    membersSnapshot.forEach((doc) => {
      const data = doc.data();
      members.push({
        id: doc.id,
        ...data,
      } as FirebaseMember);
    });
    
    return members;
  } catch (error) {
    console.error('Error fetching members:', error);
    return [];
  }
}

export async function getMemberById(id: string): Promise<FirebaseMember | null> {
  try {
    const memberDoc = doc(db, COLLECTION_NAME, id);
    const memberSnapshot = await getDoc(memberDoc);
    
    if (memberSnapshot.exists()) {
      const data = memberSnapshot.data();
      return {
        id: memberSnapshot.id,
        ...data,
      } as FirebaseMember;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching member:', error);
    return null;
  }
}

// Server-side functions (for SSR)
export async function getAllMembersServer(): Promise<FirebaseMember[]> {
  try {
    const membersCollection = adminDb.collection(COLLECTION_NAME);
    const membersQuery = membersCollection
      .where('active', '==', true)
      .orderBy('order', 'asc');
    
    const membersSnapshot = await membersQuery.get();
    
    const members: FirebaseMember[] = [];
    membersSnapshot.forEach((doc) => {
      const data = doc.data();
      members.push({
        id: doc.id,
        ...data,
      } as FirebaseMember);
    });
    
    return members;
  } catch (error) {
    console.error('Error fetching members (server):', error);
    return [];
  }
}

export async function getMemberByIdServer(id: string): Promise<FirebaseMember | null> {
  try {
    const memberDoc = adminDb.collection(COLLECTION_NAME).doc(id);
    const memberSnapshot = await memberDoc.get();
    
    if (memberSnapshot.exists) {
      const data = memberSnapshot.data();
      if (!data) return null;
      
      return {
        id: memberSnapshot.id,
        ...data,
      } as FirebaseMember;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching member (server):', error);
    return null;
  }
}

// Helper functions for localization
export function localizeMember(member: FirebaseMember, lang: SupportedLanguage): LocalizedMember {
  return {
    id: member.id || '',
    name: member.name,
    role: member.role[lang],
    roleDetailed: member.roleDetailed[lang],
    description: member.description[lang],
    image: member.image,
    whatsAppLink: member.whatsAppLink,
    instagramLink: member.instagramLink,
    facebookLink: member.facebookLink,
    linkedInLink: member.linkedInLink,
    active: member.active,
    order: member.order
  };
}

export function localizeMembers(members: FirebaseMember[], lang: SupportedLanguage): LocalizedMember[] {
  return members.map(member => localizeMember(member, lang));
}

// Compatibility layer - to maintain the same interface as members-i18n.ts
export async function getLocalizedMembers(lang: SupportedLanguage): Promise<LocalizedMember[]> {
  const firebaseMembers = await getAllMembersServer();
  return localizeMembers(firebaseMembers, lang);
}

export async function getLocalizedMember(memberId: string, lang: SupportedLanguage): Promise<LocalizedMember | null> {
  const firebaseMember = await getMemberByIdServer(memberId);
  if (!firebaseMember) return null;
  return localizeMember(firebaseMember, lang);
}

// Migration helper function
export async function migrateMembersToFirebase(members: any[]) {
  try {
    const batch = adminDb.batch();
    
    members.forEach((member, index) => {
      const memberRef = adminDb.collection(COLLECTION_NAME).doc(member.id);
      batch.set(memberRef, {
        ...member,
        active: true,
        order: index + 1, // Set order based on array position
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
    
    await batch.commit();
    console.log('Members migrated successfully to Firebase');
  } catch (error) {
    console.error('Error migrating members to Firebase:', error);
    throw error;
  }
}
