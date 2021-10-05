import {
    configureStore
} from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import postReducer from './Post/postSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer
    },
});