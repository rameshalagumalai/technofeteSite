import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const app = initializeApp({
  apiKey: "AIzaSyCrdHDObvg3CPbTHTK7U5iAdWEdD46ZiTk",
  authDomain: "tehnofete.firebaseapp.com",
  projectId: "tehnofete",
  storageBucket: "tehnofete.appspot.com",
  messagingSenderId: "50156462615",
  appId: "1:50156462615:web:42cfbc93f1420bfcf63252",
});

export const auth = getAuth(app);
