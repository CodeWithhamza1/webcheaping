
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6WUtcC-aGDibApLPMT-bLotDp-relo4o",
  authDomain: "comment-60124.firebaseapp.com",
  projectId: "comment-60124",
  storageBucket: "comment-60124.appspot.com",
  messagingSenderId: "778360522371",
  appId: "1:778360522371:web:16d94f112b9c75b4d47db6",
  measurementId: "G-XQ7N0J5KLE"
};
const app = initializeApp(firebaseConfig);


const auth = getAuth();

let register = document.getElementById("signup");

register.addEventListener('click', () => {
    let signupname = document.getElementById('upname');
    let email = document.getElementById('upemail');
    let password = document.getElementById('uppass');

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.alert("Welcome "+ email.value);
    window.location.assign("welcome.html");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Please Complete the form to execue " + errorMessage)
    // ..
    
})

});

let loginbtn = document.getElementById('signin');

loginbtn.addEventListener('click',()=>{
    let logemail = document.getElementById('logemail');
    let logpassword = document.getElementById('logpass');

    const auth = getAuth();
signInWithEmailAndPassword(auth, logemail.value, logpassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("You signed in successfully " + logemail.value);
    window.location.assign("welcome.html");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(" error" + errorMessage);
  });
    
});
