import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqeitkVnslmcclqcUaD5oTF2KoISfgnkw",
  authDomain: "elipson-uat.firebaseapp.com",
  projectId: "elipson-uat",
  storageBucket: "elipson-uat.firebasestorage.app",
  messagingSenderId: "585838521730",
  appId: "1:585838521730:web:f719ba23e5af71951cb39b",
  measurementId: "G-J5QL2P7PRZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
