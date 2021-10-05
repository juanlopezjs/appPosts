import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEmailUser } from "../Store/User/userSlice";

const AuthRoute = ({ children, ...rest }) => {
  const emailUser = useSelector(selectEmailUser);

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        emailUser !== "" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

AuthRoute.propTypes = {
  children: PropTypes.node
};

AuthRoute.defaultProps = {
  children: null
};

export default AuthRoute;
