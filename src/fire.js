import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAsjwR-mjN-VwQuE9tmW7XiuVIUhAAPVP0",
  authDomain: "test1-project-bcb6d.firebaseapp.com",
  projectId: "test1-project-bcb6d",
  storageBucket: "test1-project-bcb6d.appspot.com",
  messagingSenderId: "334610609834",
  appId: "1:334610609834:web:75aa7e22b67b721f3f82d3"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;