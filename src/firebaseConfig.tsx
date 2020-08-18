import * as firebase from 'firebase/';

const firebaseConfig = {
  apiKey: 'AIzaSyCAOOfb99wSFmJP3tYvgGMpcq4R4fKn5v4',
  authDomain: 'slack-clone-4552e.firebaseapp.com',
  databaseURL: 'https://slack-clone-4552e.firebaseio.com',
  projectId: 'slack-clone-4552e',
  storageBucket: 'slack-clone-4552e.appspot.com',
  messagingSenderId: '990384133819',
  appId: '1:990384133819:web:d5bc28523858fb4a853b9e',
  measurementId: 'G-1V5C608KZ8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
