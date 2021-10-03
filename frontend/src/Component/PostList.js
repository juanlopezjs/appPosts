import React from "react";
import Card from "./Card";

const PostList = ({ posts, lastElementRef }) => (
  <>
    {posts.map((post, index) => {
      return (
        <div key={index} className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <Card
              key={index}
              title={post.name}
              content={post.content}
              likes={post.likes}
              dislikes={post.dislikes}
              userEmail={post.userEmail}
              numberComments={post.Comments.length}
              created={post.createdAt}
            />
          </div>
        </div>
      );
    })}
  </>
);

export default PostList;
