import React from "react";
import PropTypes from "prop-types";
import formatDateToString from "../Utils/index";

// Components
import Avatar from "./Avatar";

const CommentList = ({ comments }) => {
  const commentList = [...comments];
  return (
    <>
      {commentList
        .sort((a, b) => a.id - b.id)
        .map((comment, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="card shadow-sm bg-body mb-3">
            <div className="row g-0 pt-2">
              <div className="col-xs-2 col-sm-2 col-md-2 d-flex align-self-center justify-content-center">
                <Avatar userEmail={comment.userEmail} />
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8">
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

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      content: PropTypes.string,
      userEmail: PropTypes.string,
      createdAt: PropTypes.string
    })
  )
};

CommentList.defaultProps = {
  comments: []
};

export default CommentList;
