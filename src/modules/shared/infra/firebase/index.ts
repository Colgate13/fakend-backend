import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

export default db;