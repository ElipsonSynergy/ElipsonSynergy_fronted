import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Re-exporta helpers (¡clave!)
export {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  doc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBqeitkVnslmcclqcUaD5oTF2KoISfgnkw",
  authDomain: "elipson-uat.firebaseapp.com",
  projectId: "elipson-uat",
  storageBucket: "elipson-uat.firebasestorage.app",
  messagingSenderId: "585838521730",
  appId: "1:585838521730:web:f719ba23e5af71951cb39b",
  measurementId: "G-J5QL2P7PRZ"
};

// const firebaseConfig = {
//   apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
//   authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
// };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
