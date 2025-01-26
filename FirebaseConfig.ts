/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBvUcp85m9DEaWBuQaYEzw6yCjjITStr58',
  authDomain: 'cookbook-ba3ff.firebaseapp.com',
  projectId: 'cookbook-ba3ff',
  storageBucket: 'cookbook-ba3ff.firebasestorage.app',
  messagingSenderId: '909907495225',
  appId: '1:909907495225:web:fa57bd426ed953166400e8',
  measurementId: 'G-W4TRNBK8L5',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
