// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGISc9eUO8sv7zGNIDl8ppgZmLjSU_dxg",
  authDomain: "todoapp-964bf.firebaseapp.com",
  projectId: "todoapp-964bf",
  storageBucket: "todoapp-964bf.appspot.com",
  messagingSenderId: "818980161528",
  appId: "1:818980161528:web:4b3167ea7805bae50b780d"
};

 

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);