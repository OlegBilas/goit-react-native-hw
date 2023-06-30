import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const STATUS = {
  FULFILLED: "fulfilled",
  PENDING: "pending",
  REJECTED: "rejected",
};

const actionGenerators = [register, logIn];

const getActionGeneratorsWithType = (status) =>
  actionGenerators.map((generator) => generator[status]);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      login: null,
      email: null,
      password: null,
      photo: null,
    },
    isLoggedIn: false,
    isRefreshing: false,
    // error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected)
      .addCase(logOut.fulfilled, handleLogOut)
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.FULFILLED)),
        handleUserLoggingFulfilled
      );
  },
});

function handleUserLoggingFulfilled(state, action) {
  state.user = action.payload;
  state.isLoggedIn = true;
  // state.error = null;
}

// function handleUserLoggingRejected(state, action) {
//   // console.log(action.payload);
//   state.error = action.payload;
//   state.isLoggedIn = false;
// }

function handleLogOut(state) {
  state.user = {
    id: null,
    displayName: null,
    email: null,
    password: null,
    photo: null,
  };
  state.isLoggedIn = false;
  // state.error = null;
}
function handleRefreshUserPending(state) {
  state.isRefreshing = true;
  // state.error = null;
}

function handleRefreshUserFulfilled(state, action) {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  // state.error = null;
}

function handleRefreshUserRejected(state, action) {
  state.isRefreshing = false;
  // state.error = action.payload;
}

export const authReducer = authSlice.reducer;
