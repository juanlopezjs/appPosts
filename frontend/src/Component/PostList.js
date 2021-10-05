import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const PostList = ({ posts }) => (
  <>
    {posts.map((post, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="row justify-content-center" key={index}>
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-7 mb-4">
          <Card
            id={post.id}
            name={post.name}
            content={post.content}
            likes={post.likes}
            dislikes={post.dislikes}
            userEmail={post.userEmail}
            Comments={post?.Comments}
            createdAt={post.createdAt}
          />
        </div>
      </div>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      content: PropTypes.string,
      likes: PropTypes.number,
      dislikes: PropTypes.number,
      userEmail: PropTypes.string,
      createdAt: PropTypes.string,
      Comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          content: PropTypes.string,
          userEmail: PropTypes.string,
          createdAt: PropTypes.string
        })
      )
    })
  )
};

PostList.defaultProps = {
  posts: []
};

export default PostList;
