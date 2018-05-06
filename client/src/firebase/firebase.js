import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyA_yfzGO8DneRipup_Tag6doPSBcPOqNY4",
    authDomain: "pediapedia-666e5.firebaseapp.com",
    databaseURL: "https://pediapedia-666e5.firebaseio.com",
    projectId: "pediapedia-666e5",
    storageBucket: "pediapedia-666e5.appspot.com",
    messagingSenderId: "797821796812",
};

const devConfig = {
  apiKey: "AIzaSyA_yfzGO8DneRipup_Tag6doPSBcPOqNY4",
    authDomain: "pediapedia-666e5.firebaseapp.com",
    databaseURL: "https://pediapedia-666e5.firebaseio.com",
    projectId: "pediapedia-666e5",
    storageBucket: "pediapedia-666e5.appspot.com",
    messagingSenderId: "797821796812",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};