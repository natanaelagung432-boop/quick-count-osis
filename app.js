
/* =====================================
   QUICK COUNT OSIS
   FIREBASE INITIALIZATION
   Browser ES Module - GitHub Pages
   ===================================== */

import { initializeApp, getApps, getApp }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    get,
    child,
    onValue,
    runTransaction,
    remove
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2bJGB_cdEumexT7CF2PpBLgpzmNieit8",
    authDomain: "quickcount-osis.firebaseapp.com",
    databaseURL: "https://quickcount-osis-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quickcount-osis",
    storageBucket: "quickcount-osis.firebasestorage.app",
    messagingSenderId: "745494309973",
    appId: "1:745494309973:web:af3507815e4bece74a38dc"
};

// Initialize Firebase
const app = getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

// Export Firebase
export {
    app,
    db,
    ref,
    set,
    get,
    child,
    onValue,
    runTransaction,
    remove
};

console.log("Firebase Quick Count OSIS initialized.");
