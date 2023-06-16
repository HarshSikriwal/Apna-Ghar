// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBBehMP2tV1oM7AY7JSOYVwuAaVyQA5Y_w",
  authDomain: "house-marketplace-app-58f0f.firebaseapp.com",
  projectId: "house-marketplace-app-58f0f",
  storageBucket: "house-marketplace-app-58f0f.appspot.com",
  messagingSenderId: "1076259064574",
  appId: "1:1076259064574:web:fdb77e8d74f399632633af",
  measurementId: "G-CLQVLCYY1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()