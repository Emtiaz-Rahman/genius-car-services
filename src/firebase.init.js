// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSVT4CRMlG8cIl1-1hztly6owwvghfQD4",
    authDomain: "genius-car-services-d256a.firebaseapp.com",
    projectId: "genius-car-services-d256a",
    storageBucket: "genius-car-services-d256a.appspot.com",
    messagingSenderId: "166469678855",
    appId: "1:166469678855:web:197918b16f1ac1b06f37a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;