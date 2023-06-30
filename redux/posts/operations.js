import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const posts = await getDocs(collection(db, "posts"));
      return posts.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, thunkAPI) => {
    try {
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
