import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

function Navbar({ onLogout, isLoggedIn }) {
  return (
    <div className="navbar">
      <nav className="flexContainer">
        <Link to="/" className="navLink">
          <div className="brandContainer">
            <img src={logo} alt="Logo" className="logo" />
            <span className="brandName">Short Snip</span>
          </div>
        </Link>
        {isLoggedIn ? (
          <button onClick={onLogout} className="logoutButton">
            Logout
          </button>
        ) : (
          <Link to="/login" className="loginButton">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
