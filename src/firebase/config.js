import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBzVYEDzQq2kKf1jXMznp9tYgfa-_8aDno",
  authDomain: "assetplus-9e444.firebaseapp.com",
  projectId: "assetplus-9e444",
  storageBucket: "assetplus-9e444.appspot.com",
  messagingSenderId: "375735222150",
  appId: "1:375735222150:web:64991d196daa8b5cb93607",
  measurementId: "G-ZM1LQPHTQL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };