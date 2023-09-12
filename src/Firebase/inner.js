import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBwWATmw2RRVDk84x67XS5_ioN43neXjZs",
    authDomain: "software-de-inventario-8eec3.firebaseapp.com",
    projectId: "software-de-inventario-8eec3",
    storageBucket: "software-de-inventario-8eec3.appspot.com",
    messagingSenderId: "184437536590",
    appId: "1:184437536590:web:55d0a2926b0b2fc982d01f"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db