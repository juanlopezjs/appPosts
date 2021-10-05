import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ userEmail }) => {
  const name = userEmail.substr(0, 2).toUpperCase();
  return (
    <div
      className="rounded-circle text-center pt-1 bg-success"
      style={{ width: "3rem", height: "3rem" }}
    >
      <h5 className="nowrap text-center text-light font-weight-bold px-sm-2 py-2">
        {name}
      </h5>
    </div>
  );
};

Avatar.propTypes = {
  userEmail: PropTypes.string.isRequired
};

export default Avatar;
