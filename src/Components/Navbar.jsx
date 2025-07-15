// src/Components/Navbar.jsx
import React from "react";
import "./Navbar.css";
import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav">

    <nav className="navbar">
      
      <input
        type="text"
        className="search-input"
        placeholder="Search for anything"
      />

      <div className="navbar-icons">
        <FiBell className="icon bell-icon" />
        <FaUserCircle className="icon profile-icon" />
      </div>
      
    </nav>
    </div>
  );
};

export default Navbar;
