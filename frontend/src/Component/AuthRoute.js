import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEmailUser } from "../Store/User/userSlice";

const AuthRoute = ({ children, ...rest }) => {
  const emailUser = useSelector(selectEmailUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        emailUser !== "" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
