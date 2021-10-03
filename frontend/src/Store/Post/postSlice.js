import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        list: [],
        page: 0,
        isFetching: false,
        hasMore: true
    },
    reducers: {
        setPostList: (state, action) => {
            state.list = state.list.concat(action.payload);
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
        },
        setPage: (state) => {
            state.page += 1;
        },
    }
});

export const {setPostList, setPage, setIsFetching} = postSlice.actions;

export default postSlice.reducer;

export const fetchPosts =  (page) => (dispatch) => {
    dispatch(setIsFetching(true))
    axios.get("http://localhost:5000/api/post",{
        params:{
            _page: page,
            _limit: 10
        }
    })
    .then(({data}) => {
        const posts = data.data.items;
        setTimeout(() => {
            dispatch(setPostList(posts));
            dispatch(setPage());
            dispatch(setIsFetching(false));
        }, 1000);
    })
    .catch((error) => console.error(error));
};

export const selectPostList = (state) => state.post.list;
