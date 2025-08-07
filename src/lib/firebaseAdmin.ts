import admin from 'firebase-admin';
import serviceAccount from '../secrets/elipson-uat-firebase-adminsdk-fbsvc-a63068983d.json';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as any),
    });
}

export const adminDb = admin.firestore();