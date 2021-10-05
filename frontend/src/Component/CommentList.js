import React from "react";
import {formatDateToString} from "../Utils/index";
/**
 *
 */
const CommentList = ({ comments }) => {
  const commentList = [...comments];
  return (
    <>
      {commentList
        .sort((a, b) => a.id - b.id)
        .map((comment, key) => (
          <div key={key} className="card shadow-sm bg-body mb-3" >
            <div className="row g-0">
              <div className="col-md-2 d-flex align-self-center justify-content-center">
                <img
                  width="45"
                  height="45"
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{comment.name}</h5>
                  <p className="card-text">{comment.content}</p>
                  <p className="card-text">
                    <small className="text-muted">
                        {formatDateToString(comment.createdAt)}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
