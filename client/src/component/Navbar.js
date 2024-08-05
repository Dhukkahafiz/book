import React, { useEffect, useState } from "react";
import "../asset/css/Navbar.css";
import logo from "../asset/images/logo.png";
import Most_useful from "../pages/Most_useful";
import Herosection from "../pages/Herosection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSearch = () => {
    window.scrollTo({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div href="/" className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-image" />{" "}
            <p>
              <span>B</span>ook <span>R</span>eader
            </p>
          </div>
          <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="#Search" className="navbar-item" onClick={scrollToSearch}>
              Search
            </a>
            <a
              href="#services"
              className="navbar-item"
              onClick={scrollToSearch}
            >
              Services
            </a>
            <a href="#contact" className="navbar-item" onClick={scrollToSearch}>
              Contact
            </a>
          </div>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
      {isOpen? <div style={{opacity:"0.2"}}>
      <Herosection></Herosection>
      </div>:  <Herosection></Herosection>

      }
     
    </>
  );
};

export default Navbar;
