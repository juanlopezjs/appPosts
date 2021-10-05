import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import postReducer from "./Post/postSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer
  }
});

export default store;
