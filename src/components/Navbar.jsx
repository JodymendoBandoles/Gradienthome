import React, { useState, useEffect } from "react";
import { Link,} from "react-router-dom";
import './Navbar.min.css';
import logo from '../assets/Gradienthomelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 


  return (
    <>
      <header>
        <nav className={`navbar navbar-expand-lg bg-white fixed-top d-flex ${isSticky ? 'is-sticky' : ''}`} id="navbar">
          <div className="container">
            <Link to="/" className="navbar-brand"> {}
              <img src={logo} alt="website-logo" width="170" height="120" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto d-flex justify-content-around w-lg-50">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About/About">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Blogs/Blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact/Contact">Contact</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">
                 <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }} />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;