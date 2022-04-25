import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4RUUVJIXrXS3d47Olfk7xbDJq7rQmzaI",
  authDomain: "crown-db-92b24.firebaseapp.com",
  projectId: "crown-db-92b24",
  storageBucket: "crown-db-92b24.appspot.com",
  messagingSenderId: "845466941764",
  appId: "1:845466941764:web:2430eb3cc6a33020dd3f11"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);