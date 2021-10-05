import React from "react";
import PropTypes from "prop-types";

const Loading = ({ isFetching }) => (
  <div className="text-center">
    {isFetching ? (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : null}
  </div>
);

Loading.propTypes = {
  isFetching: PropTypes.bool
};

Loading.defaultProps = {
  isFetching: false
};

export default Loading;
