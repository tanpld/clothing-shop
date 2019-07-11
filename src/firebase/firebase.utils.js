import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCu_LP4VKX1kJ2XIZPkYlfVcS2w9bTiAo8',
  authDomain: 'crwn-shop-db.firebaseapp.com',
  databaseURL: 'https://crwn-shop-db.firebaseio.com',
  projectId: 'crwn-shop-db',
  storageBucket: '',
  messagingSenderId: '839079692585',
  appId: '1:839079692585:web:5e9dcde5765837b8',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
