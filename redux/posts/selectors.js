import { createSelector } from "@reduxjs/toolkit";

export const selectPosts = (state) => state.posts.items;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectError = (state) => state.posts.error;
