import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
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

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
