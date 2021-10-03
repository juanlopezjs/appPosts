import React from "react";
import Card from "./Card";
import { useLocation, useHistory } from "react-router-dom";

const PostDetails = () => {
  const { state } = useLocation();
  const history = useHistory();

  const handleToBack = () => history.goBack();
  return (
    <>
      <div className="d-flex justify-content-start">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleToBack}
        >
          <i className="bi bi-arrow-left-circle"></i>
        </button>
      </div>
      <Card {...state} />
    </>
  );
};
export default PostDetails;
