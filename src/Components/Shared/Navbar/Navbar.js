import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <div className="nav-container">
          <ul className="navbar-nav">

            <li className="nav-item m-auto">
              <Link className="text-style" to="/home">Home</Link>
            </li>

            <li className="nav-item m-auto">
              <Link className="text-style" to="/admin">Dashboard</Link>
            </li>

            <li className="nav-item m-auto">
              <Link className="text-style" to="#">Services</Link>
            </li>

            <li className="nav-item m-auto">
              <Link className="text-style" to="#">Reviews</Link>
            </li>
          
            <li className="nav-item m-auto">
              <Link to="/login"><button className="button-primary">Log In</button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
