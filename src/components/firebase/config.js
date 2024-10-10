import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBTXN6NSW9o7PG1UARy8z3Jif86rEB-apg",
    authDomain: "blogpatch-7c8f0.firebaseapp.com",
    projectId: "blogpatch-7c8f0",
    storageBucket: "blogpatch-7c8f0.appspot.com",
    messagingSenderId: "279032427390",
    appId: "1:279032427390:web:656f492a2e74f92f3c392f"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);