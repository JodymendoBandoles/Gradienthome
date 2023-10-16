import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import FAQImage from '../../assets/FAQImage.jpg';
import FAQImage2 from '../../assets/FAQImage2.jpg';
import './FAQ.css';
import GoogleMap from "../../components/GoogleMap";
import Footer from "../../components/Footer";
import CustomerQuestions from '../../components/CustomerQuestions';

function FAQ() {
  const [faqData, setFaqData] = useState([
    {
      question: "How do I get started with buying a home through Gradienthome?",
      answer: "To begin the process of buying a home through Gradienthome, you can start by browsing our available listings and contacting our team to discuss your specific needs and preferences. We'll guide you through every step of the home buying journey.",
      isOpen: false,
    },
    {
      question: "What services does Gradienthome provide for sellers?",
      answer: "Gradienthome offers comprehensive services for sellers, including property evaluation, listing your home, marketing, and connecting you with potential buyers. Our experienced team will ensure a seamless selling experience.",
      isOpen: false,
    },
    {
      question: "Can I trust Gradienthome with my real estate needs?",
      answer: "Absolutely! Gradienthome is a local real estate agency deeply embedded in the community. We prioritize transparency, integrity, and exceptional service. Our team is dedicated to your real estate success.",
      isOpen: false,
    },
    {
      question: "What makes Gradienthome different from other real estate agencies?",
      answer: "Gradienthome stands out due to our local expertise, commitment to clients, and a tailored approach to every individual's real estate needs. We are deeply rooted in the community, contributing to its growth and prosperity.",
      isOpen: false,
    },
    {
      question: "Do I need to be an experienced investor to work with Gradienthome?",
      answer: "Not at all! Whether you're a first-time homebuyer or an experienced investor, Gradienthome is here to help you reach your real estate goals. We provide guidance and support at every level of expertise.",
      isOpen: false,
    },
    {
      question: "How can I schedule a consultation with Gradienthome?",
      answer: "Scheduling a consultation with Gradienthome is easy. Simply contact our team via phone or email, and we'll set up a convenient time to discuss your real estate needs and preferences.",
      isOpen: false,
    },
    {
      question: "Does Gradienthome offer rental property services?",
      answer: "Yes, Gradienthome provides rental property services as well. If you're looking for a rental property, our team can help you find the perfect place to call home.",
      isOpen: false,
    },
    
  ]);

  const toggleAnswer = (index) => {
    const updatedFaqData = [...faqData];
    updatedFaqData[index].isOpen = !faqData[index].isOpen;
    setFaqData(updatedFaqData);
  };

  return (
    <>
      <Navbar />
      <div className="carousel slide d-none d-lg-block d-sm-none">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={FAQImage} className="d-block w-100" alt="Gradient home real estate office" />
            <div className="carousel-caption">
              <h1 id="AboutUs-caption">
                FAQ's
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel slide d-sm-block d-lg-none">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={FAQImage2} className="d-block w-100" alt="Gradient home real estate office" />
            <div className="carousel-caption">
              <h1 id="AboutUs-caption">
                FAQ's
              </h1>
            </div>
          </div>
        </div>
      </div>

      <article className="container-md">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${item.isOpen ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
              key={index}
            >
              <div className="faq-number">{index + 1}</div>
              <h3>{item.question}</h3>
              {item.isOpen && (
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </article>

      <CustomerQuestions />
      <GoogleMap /> 
      <Footer />
    </>
  );
}

export default FAQ;

