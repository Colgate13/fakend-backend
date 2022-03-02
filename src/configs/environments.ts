import dotenv from 'dotenv';

dotenv.config();

export const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

export const firebaseAdminConfig = {
    serviceAccountId: process.env.FIREBASE_ADMIN_SERVICEACCOUNTID,
    projectId: process.env.FIREBASE_ADMIN_PROJECTID,
    databaseURL: process.env.FIREBASE_ADMIN_DATABASEURL
}
