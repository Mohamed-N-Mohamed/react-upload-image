import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDgeJFObTWxWfDiWgKrmO6wFjYig2wtNao",
  authDomain: "book-77d03.firebaseapp.com",
  projectId: "book-77d03",
  storageBucket: "book-77d03.appspot.com",
  messagingSenderId: "29862994969",
  appId: "1:29862994969:web:7f2e9b61eab12cdcf27688"
};

initializeApp(firebaseConfig)

const db = getFirestore();


export { db }