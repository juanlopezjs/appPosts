import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const executeFetchGetPosts = (page) => {
    return axios.get(`${REACT_APP_API_URL}post`,{
        params:{
            _page: page,
            _limit: 10
        }
    });
};

export const executeFetchPostAction = (postId, isLiked, userEmail) => {
    return axios.post(`${REACT_APP_API_URL}action`,{
        "PostId": postId,
        isLiked,
        userEmail
    })
};