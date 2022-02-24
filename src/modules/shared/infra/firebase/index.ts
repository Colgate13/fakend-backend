import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


import { initializeApp as AdminInitializeApp, applicationDefault, getApp } from 'firebase-admin/app';
import { getAuth as AdminGetAuth } from "firebase-admin/auth";


AdminInitializeApp({
    serviceAccountId: "83609409125-uch2oq4dolt20uksahgvh7uobvla2mjd.apps.googleusercontent.com",
    projectId: "fakend-backend",
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

const firebaseConfig = {
    apiKey: "AIzaSyDv6X04Jv-BBu0jdPjV2Hh-h1nKaf_sMks",
    authDomain: "fakend-backend.firebaseapp.com",
    projectId: "fakend-backend",
    storageBucket: "fakend-backend.appspot.com",
    messagingSenderId: "83609409125",
    appId: "1:83609409125:web:263b05841e56b8168a588c",
    measurementId: "G-8MNL7YHXNE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const adminApp = getApp();
export const adminAuth = AdminGetAuth(adminApp);