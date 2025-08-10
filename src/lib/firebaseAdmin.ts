// src/lib/firebaseAdmin.ts
import admin from 'firebase-admin';

if (!admin.apps.length) {
  const projectId   = process.env.FIREBASE_PROJECT_ID!;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
  const privateKey  = process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'); // ojo saltos de línea

  admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
    // opcionales si los usas:
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  });
}

export const auth = admin.auth();
export const db   = admin.firestore();
export const bucket = admin.storage().bucket();
