import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVm5M1Y0KmqTQPAyBMS34oABebkveElfE",
  authDomain: "nmcnpm-7e1e1.firebaseapp.com",
  projectId: "nmcnpm-7e1e1",
  storageBucket: "nmcnpm-7e1e1.appspot.com",
  messagingSenderId: "593810548312",
  appId: "1:593810548312:web:7b57cf7048000f506e0c2d",
  measurementId: "G-GMR42XV9RG",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
