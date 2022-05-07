// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCrdHDObvg3CPbTHTK7U5iAdWEdD46ZiTk",
  authDomain: "tehnofete.firebaseapp.com",
  projectId: "tehnofete",
  storageBucket: "tehnofete.appspot.com",
  messagingSenderId: "50156462615",
  appId: "1:50156462615:web:42cfbc93f1420bfcf63252",
});


export const auth = app.auth();
