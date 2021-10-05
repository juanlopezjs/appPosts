import React from "react";

const Avatar = ({ userEmail }) => {
  const name = userEmail.split("@")[0];
  const profileName = name.substr(0, 2).toUpperCase();
  return (
    <div
      className={`rounded-circle text-center pt-1 bg-success`}
      style={{ width: "3rem", height: "3rem" }}
    >
      <h5 className="nowrap text-center text-light font-weight-bold px-sm-2 py-2">
        {profileName}
      </h5>
    </div>
  );
};

export default Avatar;
