
// ============================================
// QUICK COUNT OSIS
// Firebase Configuration & Initialization
// Firebase SDK v10.12.0
// ============================================

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

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2bJGB_cdEumexT7CF2PpBLgpzmNieit8",
  authDomain: "quickcount-osis.firebaseapp.com",
  databaseURL: "https://quickcount-osis-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quickcount-osis",
  storageBucket: "quickcount-osis.firebasestorage.app",
  messagingSenderId: "745494309973",
  appId: "1:745494309973:web:af3507815e4bece74a38dc"
};

// Inisialisasi Firebase (hindari duplikasi)
const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Inisialisasi Realtime Database
const db = getDatabase(app);

// Export fungsi untuk seluruh halaman
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

console.log("Quick Count OSIS: Firebase berhasil diinisialisasi.");
