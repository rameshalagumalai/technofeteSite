import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyCLLIC34CiAE0Pn40SHa1TXs27cDMAjDY4",
  authDomain: "student-slam.firebaseapp.com",
  databaseURL: "https://grievances-53504-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-slam",
  storageBucket: "student-slam.appspot.com",
  messagingSenderId: "482213677623",
  appId: "1:482213677623:web:aab0f756e15f06750a8db2",
  measurementId: "G-VCL72Y63D0"
});

export const auth = getAuth(app);