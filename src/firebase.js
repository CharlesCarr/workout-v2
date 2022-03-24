// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP57GOHDtl_gWWQ_KHenl2HQk1n9DlHVc",
  authDomain: "workout-tracker-faa13.firebaseapp.com",
  databaseURL: "https://workout-tracker-faa13-default-rtdb.firebaseio.com",
  projectId: "workout-tracker-faa13",
  storageBucket: "workout-tracker-faa13.appspot.com",
  messagingSenderId: "1094174665089",
  appId: "1:1094174665089:web:47f62a74b662111c69a080",
  measurementId: "G-B25G3BZDQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();