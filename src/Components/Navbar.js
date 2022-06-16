import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <p className="nav-para">PlusPin</p>
          <a href="/">Diagnostics</a>
          <a href="/">Doctor-Consultaion</a>
          <a href="/">Physiotherepy</a>
          <a href="/">Rent-Equiment</a>
          <a href="/">Contact</a>
        <button className="nav-btn">+91-7015920486</button>
        </div>
        <div className="navbar-input">
          <div className="location">
            <span>Rewari, Haryana</span>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search Here"
              style={{ border: "none", fontWeight: "500" }}
            />
          </div>
          <div className="upload">
            <p>Upload Prescription</p>
          </div>
          <div className="login-div">
            <button className="login-btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
