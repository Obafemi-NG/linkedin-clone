import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA59prlHM04cHSOb9B3unIijpuhYyVNEBI",
  authDomain: "cloned-linkedin.firebaseapp.com",
  projectId: "cloned-linkedin",
  storageBucket: "cloned-linkedin.appspot.com",
  messagingSenderId: "144507524888",
  appId: "1:144507524888:web:a95538c055bd4b3735b06d",
  measurementId: "G-KZC0GXJD3N",
};

export const firebaseApp = initializeApp(firebaseConfig);
