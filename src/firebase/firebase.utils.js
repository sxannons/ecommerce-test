import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, getDoc, setDoc, doc, onSnapshot } from 'firebase/firestore';

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
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const firebaseApp = app;
export const auth = getAuth();
export const createFirebaseUserWithEmail = createUserWithEmailAndPassword;
export const dbInstance = db;
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const onFirestoreChange = onSnapshot;
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', userAuth.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, { displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};
