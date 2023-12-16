//Firebase:
 //firebase is a database that stores data in JSON format and allows us to sync data across all clients in realtime. 
    //It is a NoSQL database.
    //It is a cloud service.
    //It is a realtime database.

// we will use:
// database 
// auth
// storage
// hosting

import { } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAvaLF530Xg2iTAfcf8-Ni8DIJyk5ka8is",
   authDomain: "fir-class-1-5ce1f.firebaseapp.com",
   projectId: "fir-class-1-5ce1f",
   storageBucket: "fir-class-1-5ce1f.appspot.com",
   messagingSenderId: "79462474838",
   appId: "1:79462474838:web:920c7fadea9f3a543a47f7"
 };

 // Initialize Firebase
 var app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

console.log(app);
console.log(db);

var addDatabtn = document.getElementById("adddata");
addDatabtn.addEventListener("click", addData);

function addData()
{
    var userObj = {
        name: "Ali",
        age: 25

    }
    console.log("userobj ", userObj);
    addDoc(collection(db, "users"), userObj);
}

async function getData()
{
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(function(doc)
    {
        console.log(doc.id, " => ", doc.data());
    })
}

var getDataBtn = document.getElementById("getdata");
getDataBtn.addEventListener("click", getData);

//learn data mapping
