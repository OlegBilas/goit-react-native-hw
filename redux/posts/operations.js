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
        // const { photo, ...rest } = doc.data();
        array.push({ id: doc.id, ...doc.data() });
        // array.push({ id: doc.id, photo: realURLPhoto, ...rest });
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
      // const storageRef = ref(storage, path);
      // await uploadBytes(storageRef, file);
      //Отримання реального шляху для фото та запис у Redux
      upLoadFile(file, path);
      console.log("after");
      post = { photo, ...rest };

      //Додавання посту в Firebase
      const docRef = await addDoc(collection(db, "posts"), post);

      return { id: docRef.id, photo, ...rest };
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

function upLoadFile(file, path) {
  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      // switch (snapshot.state) {
      //   case "paused":
      //     console.log("Upload is paused");
      //     break;
      //   case "running":
      //     console.log("Upload is running");
      //     break;
      // }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          console.log(1);
          break;
        case "storage/canceled":
          // User canceled the upload
          console.log(2);
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          console.log(3);
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );
}

// async function getRealURLPhoto(photo) {
//   return await getDownloadURL(ref(storage, photo));
// }
