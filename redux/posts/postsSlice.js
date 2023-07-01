import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createPost, addComment, fetchPosts } from "./operations";

// const initialItems = [
//   { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
//   { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
//   { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
//   { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
// ];

const STATUS = {
  FULFILLED: "fulfilled",
  PENDING: "pending",
  REJECTED: "rejected",
};

const actionGenerators = [fetchPosts, createPost, addComment];

const getActionGeneratorsWithType = (status) =>
  actionGenerators.map((generator) => generator[status]);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, handleFetchPosts)
      .addCase(createPost.fulfilled, handleCreatePost)
      .addCase(addComment.fulfilled, handleAddComment)
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.PENDING)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.FULFILLED)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.REJECTED)),
        handleRejected
      );
  },
});

function handleFetchPosts(state, action) {
  console.log(action.payload);
  state.items = action.payload;
  //   state.id = action.payload.id;
  // state.photo = action.payload.photo;
  // state.title = action.payload.title;
  // state.comments = action.payload.comments;
  // state.likes = action.payload.likes;
  // state.coords = action.payload.coords;
  // state.place = action.payload.place;
}

function handleCreatePost(state, action) {
  state.items = [action.payload, ...state.items];
}
function handleAddComment(state, action) {
  const { idPost, id, date, text } = action.payload;
  const post = state.items.find((item) => item.id === idPost);
  const comments = [{ id, date, text }, ...post.comments];
  post.comments = comments;
}

//addLike;

function handlePending(state, action) {
  state.isLoading = true;
  state.error = null;
}

function handleFulfilled(state, action) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const postsReducer = postsSlice.reducer;
