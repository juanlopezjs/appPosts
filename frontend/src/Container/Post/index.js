import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

// Componets
import PostList from "../../Component/PostList";
import Loading from "../../Component/Loading";

// redux
import {
  fetchPosts,
  selectPostList,
  setPage,
  setNewPage
} from "../../Store/Post/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostList);
  const { isFetching, page, newPage } = useSelector((state) => state.post);

  const loadPosts = useCallback(() => {
    dispatch(fetchPosts(page));
    dispatch(setNewPage(page));
  }, [dispatch, page]);

  const handlerNextPosts = () => {
    dispatch(setPage());
  };

  useEffect(() => {
    if (newPage !== page) {
      loadPosts();
    }
  }, [newPage, page, loadPosts]);

  return (
    <div className="row mb-4 justify-content-center">
      <InfiniteScroll
        dataLength={posts.length}
        next={handlerNextPosts}
        hasMore
        style={{ overflowX: "hidden" }}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <PostList posts={posts} />
      </InfiniteScroll>
      <Loading isFetching={isFetching} />
    </div>
  );
};

export default Posts;
