

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ6JzpZ--y3HK_G7MKZfb_rQLQ_2VVAbE",
  authDomain: "test-form-51683.firebaseapp.com",
  projectId: "test-form-51683",
  storageBucket: "test-form-51683.appspot.com",
  messagingSenderId: "817410761702",
  appId: "1:817410761702:web:63b764b797d1a9da5eec27",
  measurementId: "G-KVYS921LDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var name = getInput('name');
  var email = getInput('email');

  console.log(name, email);
}

function getInput(id) {

  return document.getElementById(id).value;
}
