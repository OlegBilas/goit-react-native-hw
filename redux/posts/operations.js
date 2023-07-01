import { createAsyncThunk } from "@reduxjs/toolkit";
import { app, db, storage } from "../../config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "@firebase/storage";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      //Отримання постів із Firebase
      const posts = await getDocs(collection(db, "posts"));
      const array = [];
      posts.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() });
      });
      return array;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, thunkAPI) => {
    try {
      //Підготовка фото до завантаження
      const { photo, ...rest } = post;
      const response = await fetch(photo);
      const file = await response.blob();
      const fileName = photo.slice(photo.lastIndexOf("/") + 1);
      const path = `images/${fileName}`;

      //Отримання реального шляху для фото та запис у Redux
      const realPhotoURL = await upLoadFile(file, path);
      post = { photo: realPhotoURL, ...rest };

      //Додавання посту в Firebase
      const docRef = await addDoc(collection(db, "posts"), post);

      return { id: docRef.id, ...post };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async (comment, thunkAPI) => {
    const { idPost, ...restPostData } = comment;
    try {
      const postRef = doc(db, "posts", idPost);
      await updateDoc(postRef, {
        comments: arrayUnion(restPostData),
      });

      return comment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLike = createAsyncThunk(
  "posts/addLike",
  async (idPost, thunkAPI) => {
    try {
      const postRef = doc(db, "posts", idPost);
      await updateDoc(postRef, {
        likes: increment(1),
      });

      return idPost;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

async function upLoadFile(file, path) {
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, path);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  return await getDownloadURL(uploadTask.ref);
}

// async function getRealURLPhoto(photo) {
//   return await getDownloadURL(ref(storage, photo));
// }
