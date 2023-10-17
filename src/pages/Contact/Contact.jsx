import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Contact.css";
import ContactUsImage from '../../assets/ContactUsImage.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const sendMessage = () => {
    axios
      .post('https://my-api-endpoint.com/send-message', formData)
      .then((response) => {
        console.log('Message sent successfully!', response.data);
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>

      <Navbar /> 
      <div className="carousel slide d-none d-lg-block d-sm-none">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ContactUsImage} className="d-block w-100" alt="Gradient home real estate office" />
            <div className="carousel-caption">
              <h1 id="AboutUs-caption">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>


      <div className="container mb-5">
        <div className="row">
          <div className="col-md-7">
            <h4 id="Getintouch">Get in touch</h4>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name" 
                  placeholder="Enter your name"
                  value={formData.name} 
                  onChange={handleInputChange} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email" 
                  placeholder="Enter your email"
                  value={formData.email} 
                  onChange={handleInputChange} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Contact number</label>
              <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone" 
                  placeholder="Enter your phone number"
                  value={formData.phone} 
                  onChange={handleInputChange} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message} 
                  onChange={handleInputChange} 
                ></textarea>
            </div>
            <button id="ContactUs-btn" className="btn" onClick={sendMessage}>Send</button>
          </div>

          <div className="col-md-5">
            <section className="map-section">
                <div className="container">
                    <h2 className="text-center mt-5 mb-4">Visit Gradienthome</h2>
                <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.904678509218!2d124.57650079310159!3d11.02165044360892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307f6d57a9c90b9%3A0x20ead5253f11e064!2sTambulilid%2C%20Ormoc%2C%20Leyte!5e0!3m2!1sen!2sph!4v1687755803403!5m2!1sen!2sph" width="100%" height="450" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                    <p className="text-center mt-4">123 sa Puso Mo, Brgy. Tambulilid, Ormoc City</p>
                </div>
            </section>
          </div>
        </div>
      </div>

      <Footer /> 
    </>
  );
}

export default Contact;