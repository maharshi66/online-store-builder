import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey:"AIzaSyDL_ljZ77Po_o7WjJnnn8rgxzXTQsR7TVQ",
    authDomain: "online-store-builder-dev.firebaseapp.com",
    projectId: "online-store-builder-dev",
    storageBucket: "online-store-builder-dev.appspot.com",
    messagingSenderId: "970793094116",
    appId: "1:970793094116:web:d0bd08ce706cc0b3d355f1"
})

export const auth = app.auth();
export default firebase;