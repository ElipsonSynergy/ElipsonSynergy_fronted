import admin from 'firebase-admin';
import serviceAccount from '../secrets/elipson-uat-firebase-adminsdk-fbsvc-b564d88c6f.json';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as any),
    });
}

export const db = admin.firestore();