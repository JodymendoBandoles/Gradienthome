import React from "react";
import { Link,} from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Customer Care</h5>
            <p>
                <Link to="/FAQ/FAQ" className="nav-link text-dark" style={{ textDecoration: 'none' }}>
                FAQ
                </Link>
            </p>
            <p>
                <Link to="/About/About" className="nav-link text-dark" style={{ textDecoration: 'none' }}>
                About Us
                </Link>
            </p>
            <p>
                <Link to="/Contact/Contact" className="nav-link text-dark" style={{ textDecoration: 'none' }}>
                Contact Us
                </Link>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
            <div className="contact-details text-dark">
              <h5 className="mt-4">Contact Details:</h5>
              <p>
                <i className="fas fa-phone" style={{ color: '#0d74ba' }}></i> 123-456-7890
              </p>
              <p>
                <i className="fas fa-envelope" style={{ color: '#0d74ba' }}></i> Gradienthome@gmail.com
              </p>
              <p>
                <i className="fas fa-location" style={{ color: '#0d74ba' }}></i> Address: 123 sa Puso nang Panelist Kodego Street, Brgy, Tambulilid, Ormoc City
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Visit us on social media:</h5>
            <ul className="social-icons d-flex flex-direction-row justify-content-around mt-3 mb-5">
              <li className="mt-4">
                <a href="https://www.facebook.com/Besthome2022">
                  <i className="fab fa-facebook fa-2x" style={{ color: '#0d74ba' }}></i>
                </a>
              </li>
              <li className="mt-4">
                <a href="https://instagram.com">
                  <i className="fab fa-instagram-square fa-2x" style={{ color: 'orangered' }}></i>
                </a>
              </li>
              <li className="mt-4">
                <a href="https://youtube.com">
                  <i className="fab fa-youtube fa-2x" style={{ color: 'red' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mb-4" />

      <div className="row align-items-right">
        <div className="col-md-7 col-lg-12 text-center font-italic">
          <p className="font-italic" style={{ color: '#d75b40' }}>
            &copy; 2023 Gradienthome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





