import { createSlice } from "@reduxjs/toolkit";
import {
  executeFetchGetPosts,
  executeFetchPostAction,
  executeFetchCreatePost,
  executeFetchCreateComment
} from "./postAPI";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    list: [],
    page: 0,
    newPage: null,
    isFetching: false
  },
  reducers: {
    setNewPage: (state, action) => {
      state.newPage = action.payload;
    },
    resetList: (state) => {
      state.page = 0;
      state.list = [];
    },
    setPostList: (state, action) => {
      const posts = state.list.concat(action.payload);
      state.list = posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setPage: (state) => {
      state.page += 1;
    },
    updatePost: (state, action) => {
      const index = state.list.findIndex(
        (post) => post.id === action.payload.id
      );
      const newState = [...state.list];

      newState[index] = {
        ...state.list[index],
        ...action.payload
      };
      state.list = newState;
    },
    addComment: (state, action) => {
      const index = state.list.findIndex(
        (post) => post.id === action.payload.PostId
      );
      const newState = [...state.list];
      const comments =
        state.list[index].Comments !== undefined
          ? state.list[index].Comments
          : [];
      comments.push(action.payload);
      newState[index] = {
        ...state.list[index],
        Comments: comments
      };
      state.list = newState;
    }
  }
});

export const {
  setPostList,
  setPage,
  setIsFetching,
  updatePost,
  resetList,
  setNewPage,
  addComment
} = postSlice.actions;

export default postSlice.reducer;

export const fetchPosts = (page) => (dispatch) => {
  dispatch(setIsFetching(true));
  executeFetchGetPosts(page)
    .then(({ data }) => {
      const posts = data.data.items;
      setTimeout(() => {
        dispatch(setPostList(posts));
        dispatch(setIsFetching(false));
      }, 1000);
    })
    .catch((error) => console.error(error));
};

export const fetchAction = (postId, isLiked, userEmail) => (dispatch) => {
  dispatch(setIsFetching(true));

  executeFetchPostAction(postId, isLiked, userEmail)
    .then(({ data }) => {
      const post = data.data;
      dispatch(updatePost(post));
      dispatch(setIsFetching(false));
    })
    .catch((error) => console.error(error));
};

export const fetchCreatePost = (name, content, userEmail) => (dispatch) => {
  dispatch(setIsFetching(true));
  executeFetchCreatePost(name, content, userEmail)
    .then(({ data }) => {
      const post = data.data;
      dispatch(setPostList(post));
      dispatch(setIsFetching(false));
    })
    .catch((error) => console.error(error));
};

export const fetchCreateComment =
  (PostId, name, content, userEmail) => (dispatch) => {
    executeFetchCreateComment(PostId, name, content, userEmail)
      .then(({ data }) => {
        const comment = data.data;
        dispatch(addComment(comment));
        dispatch(setIsFetching(false));
      })
      .catch((error) => console.error(error));
  };

export const selectPostList = (state) => state.post.list;
