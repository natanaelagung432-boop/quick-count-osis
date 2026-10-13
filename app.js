// Import fungsi-fungsi Firebase SDK v10 langsung dari CDN (Mode Browser Module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
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

// Konfigurasi Firebase dari akun Anda
const firebaseConfig = {
  apiKey: "AIzaSyB2bJGB_cdEumexT7CF2PpBLgpzmNieit8",
  authDomain: "quickcount-osis.firebaseapp.com",
  databaseURL: "https://quickcount-osis-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quickcount-osis",
  storageBucket: "quickcount-osis.firebasestorage.app",
  messagingSenderId: "745494309973",
  appId: "1:745494309973:web:af3507815e4bece74a38dc"
};

// Inisialisasi Firebase App & Realtime Database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Ekspor modul agar bisa digunakan di index.html, login.html, display.html, dan admin.html
export { db, ref, set, get, child, onValue, runTransaction, remove };
