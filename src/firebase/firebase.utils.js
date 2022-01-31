import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, getDoc, setDoc, doc, onSnapshot, collection, writeBatch, getDocs } from 'firebase/firestore';

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

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const firebaseApp = app;
export const auth = getAuth();

export const database = db;
export const dbGetDocs = getDocs;
export const dbCollection = collection;
export const createFirebaseUserWithEmail = createUserWithEmailAndPassword;
export const signInWithEmail = signInWithEmailAndPassword;
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const onFirestoreChange = onSnapshot;
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      unsubscribeFromAuth();

      resolve(userAuth);
    }, reject);
  });
};
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

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.routeName] = collection;

    return accumulator;
  }, {});
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
