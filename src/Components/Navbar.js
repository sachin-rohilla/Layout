import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="navbar">
          <div className="flex-box">
            <p className="nav-para">PlusPin</p>
          </div>
          <div className="flex-box">
            <a href="/">Diagnostics</a>
          </div>
          <div className="flex-box">
            <a href="/">Doctor-Consultaion</a>
          </div>
          <div className="flex-box">
            <a href="/">Physiotherepy</a>
          </div>
          <div className="flex-box">
            <a href="/">Rent-Equiment</a>
          </div>
          <div className="flex-box">
            <a href="/">Contact</a>
          </div>
          <div className="flex-box">
            <button className="nav-btn">+91-7015920486</button>
          </div>
        </div>
        <div className="Navbar2">
        <div className="navbar2">
          <div className="abc">
            <div className="navbar-input">
              <div className="location">
                <span>Rewari, Haryana</span>
              </div>
            </div>
          </div>
          <div className="abc">
            {" "}
            <div className="search-input">
              <input
                type="text"
                placeholder="Search Here"
                style={{ border: "none", fontWeight: "500" }}
              />
            </div>
          </div>
          <div className="abc">
            <div className="upload">
              <p>Upload Prescription</p>
            </div>
          </div>
          <div className="abc">
            <div className="login-div">
              <button className="login-btn">Login</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
