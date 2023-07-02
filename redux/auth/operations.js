import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const updateUserProfile = async (dataUser) => {
  const user = auth.currentUser;
  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл
    const update = {
      displayName: dataUser.login,
      photoURL: getRealPhotoURL(dataUser.photo),
    };

    try {
      await updateProfile(user, update);
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
      updateUserProfile(restUserData);
      return {
        id: response.user.uid,
        email,
        password,
        ...restUserData,
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
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (user, thunkAPI) => {
    const { email, password, ...restUserData } = user;
    try {
      updateUserProfile(restUserData);
      return {
        id: response.user.uid,
        email,
        password,
        ...restUserData,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedId = thunkAPI.getState.auth.id;
    if (persistedId === null || persistedId !== auth.currentUser?.uid) {
      return thunkAPI.rejectWithValue("You are not logged in");
    }

    // try {
    //   logIn(auth.currentUser);
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.message);
    // }
  }
);

// onAuthStateChanged(auth, (user) => {
//   // const navigation = useNavigation();
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // navigation.navigate("Login");
//   }
// });
export const authStateChanged = onAuthStateChanged(auth, async (user) => {
  if (user) {
    return user.uid;
  }
});

// export const createAvatar = createAsyncThunk(
//   "auth/createAvatar",
//   async (photo, thunkAPI) => {
//     const { email, password, ...restUserData } = user;
//     try {
//       const response = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       updateUserProfile(restUserData);
//       return {
//         id: response.user.uid,
//         email,
//         password,
//         ...restUserData,
//       };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const removeAvatar = createAsyncThunk(
//   "auth/removeAvatar",
//   async (photo, thunkAPI) => {
//     const { email, password, ...restUserData } = user;
//     try {
//       const response = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       updateUserProfile(restUserData);
//       return {
//         id: response.user.uid,
//         email,
//         password,
//         ...restUserData,
//       };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
