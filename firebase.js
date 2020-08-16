import firebase from 'firebase'
import firebase from '@firebase/app';
require('firebase/auth');


var firebaseConfig = {
  apiKey: "AIzaSyBziZig6VRfH09YvJCpOreXldfg1f9Kx2E",
  authDomain: "social-media-app-using-react.firebaseapp.com",
  databaseURL: "https://social-media-app-using-react.firebaseio.com",
  projectId: "social-media-app-using-react",
  storageBucket: "social-media-app-using-react.appspot.com",
  messagingSenderId: "871227239599",
  appId: "1:871227239599:web:341f0d1fede5e61e4fb85a",
  measurementId: "G-TZZXB83ZJ4"
};



export const firebaseApp=firebase.initializeApp(firebaseConfig)

export const userRef=firebaseApp.database().ref('users')

export const postRef=firebaseApp.database().ref('posts')

export const storageRef=firebaseApp.storage()