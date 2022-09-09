import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
const resetfield = document.getElementById('resetemail');
const btn = document.getElementById('reset');


btn.addEventListener('click', ()=>{
    const auth = getAuth();
sendPasswordResetEmail(auth, resetfield.value)
  .then(() => {
    // Password reset email sent!
    window.alert('success')
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert('failed')
    // ..
  });

})