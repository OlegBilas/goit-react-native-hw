// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQop4EED-M3PTAaQUBdSz5qhGzaKQdz10",
  authDomain: "mobile-blog-3fcba.firebaseapp.com",
  projectId: "mobile-blog-3fcba",
  storageBucket: "mobile-blog-3fcba.appspot.com",
  messagingSenderId: "799003187232",
  appId: "1:799003187232:web:eca0b2e8c21fe38701c445",
  databaseURL: "https://mobile-blog-3fcba.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
