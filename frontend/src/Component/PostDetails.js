import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostList } from "../Store/Post/postSlice";
//Components
import CommentList from "./CommentList";

const PostDetails = () => {
  const { state } = useLocation();
  const history = useHistory();
  const posts = useSelector(selectPostList);
  const [post, setPost] = useState(state);

  useEffect(()=> {
    const filterPost = posts.find(item => item.id === post.id);
    setPost(filterPost)
  },[posts, post])

  const handleToBack = () => history.goBack();
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-7 mb-1">
          <nav className="navbar sticky-top navbar-light bg-light border">
            <div className="container-fluid">
              <button
                type="button"
                className="navbar-brand btn"
                onClick={handleToBack}
              >
                <i className="bi bi-arrow-left-circle fs-4"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-7 mb-2">
          <Card {...post} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-7 mb-4">
          <CommentList comments={post?.Comments} />
        </div>
      </div>
    </>
  );
};
export default PostDetails;
