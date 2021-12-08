import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBFOk5UI6Rk1IoxalGImYnDn3Jj_X86jAc',
  authDomain: 'crwn-db-4eb7d.firebaseapp.com',
  projectId: 'crwn-db-4eb7d',
  storageBucket: 'crwn-db-4eb7d.appspot.com',
  messagingSenderId: '467044549201',
  appId: '1:467044549201:web:79cf9c5707bf163eab2e70',
  measurementId: '${config.measurementId}',
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
