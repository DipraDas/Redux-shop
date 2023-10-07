import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDfINN9Jap3YqWusy0wDdx8e-523K9YSq4",
    authDomain: "tech-net-4bf33.firebaseapp.com",
    projectId: "tech-net-4bf33",
    storageBucket: "tech-net-4bf33.appspot.com",
    messagingSenderId: "302871971417",
    appId: "1:302871971417:web:fdb033157cf749ad529348"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);