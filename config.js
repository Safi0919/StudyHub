import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDAPNXXNK5Ij7BeF4UFLVckRzeYiGqJjmA",
  authDomain: "studygroup-ffce6.firebaseapp.com",
  projectId: "studygroup-ffce6",
  storageBucket: "studygroup-ffce6.appspot.com",
  messagingSenderId: "880129779972",
  appId: "1:880129779972:web:45208f49df9143a30cc851",
  measurementId: "G-8P36B0PB1R"
};

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export {db}