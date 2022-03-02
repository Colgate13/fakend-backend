import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { firebaseAdminConfig, firebaseConfig } from '../../../../configs/environments';


import { initializeApp as AdminInitializeApp, applicationDefault, getApp } from 'firebase-admin/app';
import { getAuth as AdminGetAuth } from "firebase-admin/auth";


AdminInitializeApp(firebaseAdminConfig);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const adminApp = getApp();
export const adminAuth = AdminGetAuth(adminApp);