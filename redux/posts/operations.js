import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "../../config";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";

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
    try {
      const { idPost, date, ...restCommentData } = comment;
      const dateString = formatDate(date);
      const postRef = doc(db, "posts", idPost);
      await updateDoc(postRef, {
        comments: arrayUnion({ date: dateString, ...restCommentData }),
      });

      return { idPost, date: dateString, ...restCommentData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLike = createAsyncThunk(
  "posts/addLike",
  async ({ idPost, idUser }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const posts = state.posts.items;
      const post = posts.find((post) => post.id === idPost);
      if (!post.likes.find((id) => idUser === id)) {
        const postRef = doc(db, "posts", idPost);
        await updateDoc(postRef, {
          likes: arrayUnion(idUser),
        });
        return { idPost, idUser, typeOfDoing: "increase" };
      } else {
        const postRef = doc(db, "posts", idPost);
        await updateDoc(postRef, {
          likes: arrayRemove(idUser),
        });
        return { idPost, idUser, typeOfDoing: "reduce" };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

async function upLoadFile(file, path) {
  const storageRef = ref(storage, path);
  const uploadTask = await uploadBytes(storageRef, file);
  return await getDownloadURL(uploadTask.ref);
}

function formatDate(dateObject) {
  const date = stringifyNumber(dateObject.getDate());
  let month = dateObject.getMonth();
  month = localeMonth(month);
  const year = dateObject.getFullYear();
  const hours = stringifyNumber(dateObject.getHours());
  const minutes = stringifyNumber(dateObject.getMinutes());

  return `${date} ${month}, ${year} | ${hours}:${minutes}`;
}

function stringifyNumber(number) {
  return String(number).padStart(2, "0");
}

function localeMonth(month) {
  switch (month) {
    case 0:
      return "січня";
    case 1:
      return "лютого";
    case 2:
      return "березня";
    case 3:
      return "квітня";
    case 4:
      return "травня";
    case 5:
      return "червня";
    case 6:
      return "липня";
    case 7:
      return "серпня";
    case 8:
      return "вересня";
    case 9:
      return "жовтня";
    case 10:
      return "листопада";
    case 11:
      return "грудня";
  }
}
