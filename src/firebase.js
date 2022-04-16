import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDsp9ZfnYiJkejY8UWFIQhqKM_IGtCLCMU",
  authDomain: "netflix-clone-e6878.firebaseapp.com",
  projectId: "netflix-clone-e6878",
  storageBucket: "netflix-clone-e6878.appspot.com",
  messagingSenderId: "446272279549",
  appId: "1:446272279549:web:4d080f912c1d382deaff94"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth()
export { auth }
export default db;