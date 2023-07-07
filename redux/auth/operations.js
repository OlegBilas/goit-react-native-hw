import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getRealPhotoURL } from "../utils/utils";
import { useNavigation, useRoute } from "@react-navigation/native";

const updateUserProfile = async (dataUser) => {
  const user = auth.currentUser;
  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл
    try {
      // console.log("dataUser.photo", dataUser.photo);
      const photoURL = await getRealPhotoURL(dataUser.photo);
      // console.log("photoURL", photoURL);
      const update = {
        displayName: dataUser.login,
        photoURL,
      };
      await updateProfile(user, update);
      return { ...dataUser, photo: photoURL };
    } catch (error) {
      throw error;
    }
  }
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const { email, password, ...restUserData } = user;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newRestUserData = await updateUserProfile(restUserData);
      return {
        ...newRestUserData,
        id: response.user.uid,
        email,
        password,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const { email, password } = user;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return {
      id: response.user.uid,
      email,
      password,
      login: response.user.displayName,
      photo: response.user.photoURL,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    signOut(auth);
    return {
      id: null,
      email: null,
      password: null,
      login: null,
      photo: null,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (user, thunkAPI) => {
    const { email, password, ...restUserData } = user;
    try {
      const newRestUserData = await updateUserProfile(restUserData);
      return {
        ...newRestUserData,
        email,
        password,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    if (!auth.currentUser) {
      return thunkAPI.rejectWithValue("You are not logged in");
    }
    return {
      id: auth.currentUser.uid,
      login: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photo: auth.currentUser.photoURL,
    };
  }
);

// export const AuthStateChanged = async () => {
//   const navigation = useNavigation();
//   onAuthStateChanged(auth, async (user) => {
//     if (!user || user.uid !== auth.currentUser?.uid) {
//       console.log(user.uid);
//       console.log(auth.currentUser?.uid);

//       navigation.navigate("Login");
//     } else {
//       navigation.navigate("Home");
//     }
//   });
// };
