import React from "react";

//Componets
import PostList from "../../Component/PostList"

const Posts = () => {
    return (
        <div className="container p-md-5">
            <div className="row mb-4">
                <PostList posts={[...Array(20)]}/>
            </div>
        </div>
    )
}

export default Posts;