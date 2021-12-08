import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBFOk5UI6Rk1IoxalGImYnDn3Jj_X86jAc',
  authDomain: 'crwn-db-4eb7d.firebaseapp.com',
  projectId: 'crwn-db-4eb7d',
  storageBucket: 'crwn-db-4eb7d.appspot.com',
  messagingSenderId: '467044549201',
  appId: '1:467044549201:web:79cf9c5707bf163eab2e70',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const firebaseApp = app;
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
