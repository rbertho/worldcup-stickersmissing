// src/firebase.js
// ─────────────────────────────────────────────────────────────────────────────
// Substitua os valores abaixo pelas credenciais do seu projeto Firebase.
// Vá em: https://console.firebase.google.com → seu projeto → ⚙️ → Project settings
// → "Your apps" → Web app → firebaseConfig
// ─────────────────────────────────────────────────────────────────────────────
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCp3TR5mEOPPW5PaitQMl83XM44Es-WOmo",
  authDomain: "stickers-wc.firebaseapp.com",
  projectId: "stickers-wc",
  storageBucket: "stickers-wc.firebasestorage.app",
  messagingSenderId: "662989173275",
  appId: "1:662989173275:web:769e1e88e33d95e9997ebe"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
