import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export const executeFetchGetPosts = (page) =>
  axios.get(`${REACT_APP_API_URL}post`, {
    params: {
      _page: page,
      _limit: 10
    }
  });

export const executeFetchPostAction = (postId, isLiked, userEmail) =>
  axios.post(`${REACT_APP_API_URL}action`, {
    PostId: postId,
    isLiked,
    userEmail
  });

export const executeFetchCreatePost = (name, content, userEmail) =>
  axios.post(`${REACT_APP_API_URL}post`, {
    name,
    content,
    userEmail
  });

export const executeFetchCreateComment = (PostId, name, content, userEmail) =>
  axios.post(`${REACT_APP_API_URL}comment`, {
    PostId,
    name,
    content,
    userEmail
  });
