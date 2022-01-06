// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMjrV4KyG66HRNwiV3q5Z3wqIcWzvaADA",
  authDomain: "dummy-trial-7e07a.firebaseapp.com",
  projectId: "dummy-trial-7e07a",
  storageBucket: "dummy-trial-7e07a-default-rtdb",
  messagingSenderId: "1072340910428",
  appId: "1:1072340910428:web:d6277b44d83443e24fc199",
  measurementId: "G-JBRN70ZBXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database()
  .ref('Collected Data');

document.getElementById('contactForm')
  .addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');

  saveMessage(name, email);
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
  });
}
