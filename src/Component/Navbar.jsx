import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "./stores/Auth";
const Navbar = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          AIDP Trust
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Events" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Members" className="nav-link">
                Staff
              </Link>
            </li>
          </ul>
          {!isLoggedIn ? (
            <Link to="/Login" className="text-decoration">
              <div className="d-flex">
                Login <FiLogIn />
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
