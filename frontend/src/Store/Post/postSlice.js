import {
    createSlice
} from '@reduxjs/toolkit';
import {
    executeFetchGetPosts,
    executeFetchPostAction
} from "./postAPI";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        list: [],
        page: 0,
        isFetching: false
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
        setPost: (state, action) => {
            const index = state.list.findIndex(post => post.id === action.payload.id);
            const newState = [...state.list];
            newState[index] = {
                ...state.list[index],
                ...action.payload
            };
            state.list= newState;
        }
    }
});

export const {
    setPostList,
    setPage,
    setIsFetching,
    setPost
} = postSlice.actions;

export default postSlice.reducer;

export const fetchPosts = (page) => (dispatch) => {
    dispatch(setIsFetching(true));
    executeFetchGetPosts(page)
        .then(({
            data
        }) => {
            const posts = data.data.items;
            setTimeout(() => {
                dispatch(setPostList(posts));
                dispatch(setPage());
                dispatch(setIsFetching(false));
            }, 1000);
        })
        .catch((error) => console.error(error));
};

export const fetchAction = (postId, isLiked, userEmail) => (dispatch) => {
    dispatch(setIsFetching(true));

    executeFetchPostAction(postId, isLiked, userEmail)
        .then(({
            data
        }) => {
            const post = data.data;
            console.log(post, "post")
            dispatch(setPost(post))
            dispatch(setIsFetching(false));
        })
        .catch((error) => console.error(error));
}
export const selectPostList = (state) => state.post.list;