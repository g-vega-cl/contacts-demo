import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBBMGyjo7-WWCKhmQb0k4_5yZR3H05mj08",
  authDomain: "iso-contacts-demo.firebaseapp.com",
  projectId: "iso-contacts-demo",
  storageBucket: "iso-contacts-demo.appspot.com",
  messagingSenderId: "776572850038",
  appId: "1:776572850038:web:db26f35f767d317a4cb457"
};

export const firebaseApp = initializeApp(firebaseConfig);
