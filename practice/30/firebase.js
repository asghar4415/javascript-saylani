import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

 
const firebaseConfig = {
  apiKey: "AIzaSyAvaLF530Xg2iTAfcf8-Ni8DIJyk5ka8is",
  authDomain: "fir-class-1-5ce1f.firebaseapp.com",
  projectId: "fir-class-1-5ce1f",
  storageBucket: "fir-class-1-5ce1f.appspot.com",
  messagingSenderId: "79462474838",
  appId: "1:79462474838:web:920c7fadea9f3a543a47f7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);

export{
    initializeApp,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    db,
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
}