import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
  // Some config here..
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
