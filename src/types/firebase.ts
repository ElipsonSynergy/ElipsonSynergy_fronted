// Firebase types for projects - matching the exact Firebase structure
export interface FirebaseProject {
  id?: string; // Firestore document ID
  active: boolean;
  category: 'agro' | 'jovenes' | 'store' | 'makers' | 'software';
  createdAt: any; // Firestore Timestamp
  description: {
    en: string;
    es: string;
    por: string;
  };
  featured: boolean;
  image: string;
  tags: {
    en: string[];
    es: string[];
    por: string[];
  };
  title: {
    en: string;
    es: string;
    por: string;
  };
  updatedAt: any; // Firestore Timestamp
}

export interface LocalizedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'agro' | 'jovenes' | 'store' | 'makers' | 'software';
  tags: string[];
  featured: boolean;
  active: boolean;
}

export type SupportedLanguage = 'es' | 'en' | 'por';

// Firebase types for members
export interface FirebaseMember {
  id?: string; // Firestore document ID
  name: string; // Names typically don't change across languages
  role: {
    es: string;
    en: string;
    por: string;
  };
  roleDetailed: {
    es: string;
    en: string;
    por: string;
  };
  description: {
    es: string;
    en: string;
    por: string;
  };
  image: string;
  whatsAppLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedInLink: string;
  active: boolean;
  order: number; // For displaying members in specific order
  createdAt: any; // Firestore Timestamp
  updatedAt: any; // Firestore Timestamp
}

export interface LocalizedMember {
  id: string;
  name: string;
  role: string;
  roleDetailed: string;
  description: string;
  image: string;
  whatsAppLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedInLink: string;
  active: boolean;
  order: number;
}
