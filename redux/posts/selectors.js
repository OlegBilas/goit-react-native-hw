import { createSelector } from "@reduxjs/toolkit";

export const selectPosts = (state) => state.posts.items;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectError = (state) => state.posts.error;

export const selectFilter = (state) => state.posts.filter;

export const selectComments = createSelector(
  [selectFilter, selectPosts],
  (filter1, posts) => {
    if (filter1) {
      return posts.filter((item) => item.id === filter1);
    }
  }
);
