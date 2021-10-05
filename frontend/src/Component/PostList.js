import React from "react";
import Card from "./Card";

const PostList = ({ posts }) => (
  <>
    {posts.map((post, index) => (
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

export default PostList;
