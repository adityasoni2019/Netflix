// npm install -g firebase-tools
// import * as firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyA032cGT6kiVmj7FrshKO_blQACHQ4c7OM",
    authDomain: "netflix-clone-6cc08.firebaseapp.com",
    projectId: "netflix-clone-6cc08",
    storageBucket: "netflix-clone-6cc08.appspot.com",
    messagingSenderId: "403566390897",
    appId: "1:403566390897:web:dd88f3b3bd1e6afef0b5d0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); 
const db = firebaseApp.firestore(); 

export {auth, db};
