import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, onSnapshot, doc, getDoc, setDoc, deleteDoc, updateDoc, Timestamp, getDocFromServer } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
import firebaseConfig from "../firebase-applet-config.json";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Use initializeFirestore instead of getFirestore to pass custom settings
// experimentalForceLongPolling: true helps avoid gRPC stream timeouts in certain network environments
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  experimentalAutoDetectLongPolling: false,
}, firebaseConfig.firestoreDatabaseId);

export const googleProvider = new GoogleAuthProvider();

// Auth helpers
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logout = () => auth.signOut();

// Test connection
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

export { onAuthStateChanged, type User, Timestamp, signInWithPopup, GoogleAuthProvider };
export { collection, addDoc, getDocs, query, where, orderBy, onSnapshot, doc, getDoc, setDoc, deleteDoc, updateDoc };
