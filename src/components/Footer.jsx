import React from "react";

function Navbar() {
    <>

<footer className="bg-light text-white pt-5 pb-4">
  <div className="container text-center text-md-left">
    <div className="row">
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Customer Care</h5>
        <p>
          <a href="blogs.html" className="text-dark" style={{ textDecoration: 'none' }}>
            Blogs
          </a>
        </p>
        <p>
          <a href="about.html" className="text-dark" style={{ textDecoration: 'none' }}>
            About Us
          </a>
        </p>
        <p>
          <a href="contact.html" className="text-dark" style={{ textDecoration: 'none' }}>
            Contact Us
          </a>
        </p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
        <div className="contact-details text-dark">
          <h5 className="mt-4">Contact Details:</h5>
          <p>
            <i className="fas fa-phone" style={{ color: '#0d74ba' }}></i> 123-456-7890
          </p>
          <p>
            <i className="fas fa-envelope" style={{ color: '#0d74ba' }}></i> BuildMeUp@gmail.com
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
            <a href="https://facebook.com">
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
      <p className="font-italic" style={{ color: '#4C745C' }}>
        &copy; 2023 BuildMeUp. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </>
}