import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Menu from "./Menu";

import { selectEmailUser } from "../Store/User/userSlice";

const Navbar = () => {
  const emailUser = useSelector(selectEmailUser);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand h1" to="/">
          App post
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
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
              <Link to="/create/post" className="btn btn-light me-3">
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
