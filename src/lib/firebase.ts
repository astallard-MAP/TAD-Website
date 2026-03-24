import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDZF8dIcD3Km1PT0fQDkshpARIOYcOf_E8",
    authDomain: "tad-website-27cbd.firebaseapp.com",
    projectId: "tad-website-27cbd",
    storageBucket: "tad-website-27cbd.firebasestorage.app",
    messagingSenderId: "343391246021",
    appId: "1:343391246021:web:14e9f059e4a4eca08bc2ac",
    measurementId: "G-3L6NH1RS2W"
};

// Initialize Firebase (Prevents double-initialization in Next.js Hot Reloading)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Analytics check (only runs in the browser)
export const initAnalytics = async () => {
    if (typeof window !== "undefined" && await isSupported()) {
        return getAnalytics(app);
    }
};

export default app;