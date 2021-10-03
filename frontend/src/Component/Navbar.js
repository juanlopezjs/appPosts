//Components
import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectEmailUser } from "../Store/User/userSlice";

const Navbar = () => {
  const emailUser = useSelector(selectEmailUser);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="45"
            height="40"
          />
        </Link>
        {emailUser !== "" && (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <Link to="/create" className="btn btn-light me-3">
                Publicar post
              </Link>
              <Menu />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
