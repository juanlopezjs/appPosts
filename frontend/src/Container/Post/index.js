import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

//Componets
import PostList from "../../Component/PostList";
import Loading from "../../Component/Loading";

//redux
import { fetchPosts, selectPostList } from "../../Store/Post/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostList);
  const { isFetching, page } = useSelector((state) => state.post);

  const loadPosts = () => {
    dispatch(fetchPosts(page));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="row mb-4 justify-content-center">
      <InfiniteScroll
        dataLength={posts.length}
        next={loadPosts}
        hasMore={true}
        style={{ overflowX: "hidden" }}
      >
        <PostList posts={posts} />
      </InfiniteScroll>
      <Loading isFetching={isFetching} />
    </div>
  );
};

export default Posts;
