import React from "react";
import Card from "./Card";

const PostList = ({ posts }) => (
  <>
    {posts.map((post, index) => (
      <Card
        key={index}
        id={post.id}
        title={post.name}
        content={post.content}
        likes={post.likes}
        dislikes={post.dislikes}
        userEmail={post.userEmail}
        numberComments={post.Comments.length}
        created={post.createdAt}
      />
    ))}
  </>
);

export default PostList;
