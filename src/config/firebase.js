// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBFKorLd2tgOnAeLeX0th0i8QNZ0TSVFJw",
  authDomain: "tech-zone-82a70.firebaseapp.com",
  projectId: "tech-zone-82a70",
  storageBucket: "tech-zone-82a70.firebasestorage.app",
  messagingSenderId: "916953185173",
  appId: "1:916953185173:web:c1eff908ba706bcd9cd49c",
  measurementId: "G-W525N10DPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth 
