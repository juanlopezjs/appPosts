import {
    configureStore
} from '@reduxjs/toolkit';
import counterReducer from './Counter/counterSlice';
import userReducer from './User/userSlice';
import postReducer from './Post/postSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        post: postReducer
    },
});