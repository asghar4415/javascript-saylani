import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "./firebase.js";

import{
    collection,
    addDoc,
    getDocs,
    doc,
    db, 
} from "./firebase.js";

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
