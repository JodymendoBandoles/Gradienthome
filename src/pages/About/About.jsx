import React from 'react';
import Navbar from "../../components/Navbar";
import "./About.css";
import AboutUsImage from '../../assets/AboutUsImage.jpg';
import AboutUsImage2 from '../../assets/AboutUsImage2.jpg';
import Jodymendo from '../../assets/Jodymendo.jpg';
import GoogleMap from "../../components/GoogleMap";
import Footer from "../../components/Footer";


function About() {
  return (
    <>
        <Navbar /> 
        <div className="carousel slide d-none d-lg-block d-sm-none">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={AboutUsImage} className="d-block w-100" alt="Gradient home real estate office" />
                    <div className="carousel-caption">
                        <h1 id="AboutUs-caption">
                            About Us
                        </h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="carousel slide d-sm-block d-lg-none">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={AboutUsImage2} className="d-block w-100" alt="Gradient home real estate office" />
                    <div className="carousel-caption">
                        <h1 id="AboutUs-caption">
                            About Us
                        </h1>
                    </div>
                </div>
            </div>
        </div>

        <article className="container-md">
            <h2>
                Our Vision:
                <br />
                <span className="caption-keywords">Building Your Dreams</span>, One Home at a Time
                <br />
            </h2>
            <p>
                We understand that buying or selling a home is a significant milestone in your life. That's why we're here, to guide you through every step of the journey with expertise, care, and unparalleled customer service.

                With a team of experienced professionals who are deeply rooted in the local real estate landscape, we offer a wealth of knowledge and insights to help you make informed decisions. Whether you're searching for the perfect property, looking to list your home, or need expert advice, we're here to ensure your experience is seamless and satisfying.

                At Gradienthome, we value not just the properties we represent, but the relationships we build. We know that every client is unique, and we tailor our services to meet your individual needs. We pride ourselves on transparency, integrity, and a commitment to going the extra mile.

                As a local real estate agency, we're deeply ingrained in the community we serve, and we take pride in contributing to its growth and prosperity. Whether you're a first-time homebuyer or a seasoned investor, we are here to help you reach your real estate goals.

                Discover the Gradienthome difference - where exceptional service, local expertise, and your dreams converge to create the ultimate real estate experience. Let us be your trusted partner in building your future, one home at a time.
            </p>
        </article>

        <section className="container-md">
            <div className="row">
            <div className="col-md-6 order-md-2 text-left">
                <h2> Meet Our Founder: <span className="caption-keywords">Jodymendo Bandoles</span></h2>
                <p>Jodymendo Bandoles, the driving force behind Gradienthome, is a visionary leader in the world of real estate. With a deep commitment to excellence, Jodymendo has dedicated his life to helping individuals and families find their dream homes. His unwavering dedication, local expertise, and a passion for providing exceptional service make him the trusted partner for all your real estate needs. Discover the Gradienthome difference, where Jodymendo Bandoles turns your real estate dreams into a reality.</p>
            </div>

            <div className="col-md-6 order-md-1">
                <img src={Jodymendo} alt="Esmeralda's photo" className="img-fluid" />
            </div>
            </div>
        </section>

        {/* <section className="services">
            <div className="container">
                <div className="RealEstateTeam">
                    <h2><span className="Goldenyellowbackground">Meet Our Gradienthome Real Estate Team</span></h2>
                    <h3>Your Trusted Partners in Real Estate</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 py-3 py-md-0">
                        <div className="card">
                        <img src="./Photos/Benjamin-Netanyahu.jpg" alt="Benjamin Netanyahu" />
                        <h4><span className="Goldenyellowbackground">Benjamin Netanyahu</span></h4>
                        <p>
                            With a wealth of experience in the real estate industry, Benjamin Netanyahu is a trusted member of our Gradienthome real estate team. He is dedicated to helping clients find their dream homes and investments. His expertise and commitment to excellence make him an invaluable asset to our team.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 col-lg-4 py-3 py-md-0">
                    <div className="card">
                        <img src="./Photos/Joe-Biden.jpg" alt="Joe Biden" />
                        <h4><span className="Goldenyellowbackground">Joe Biden</span></h4>
                        <p>
                            Joe Biden, a prominent figure in the real estate industry, brings his passion for helping clients navigate the real estate market at Gradienthome. With a focus on personalized service and ethical practices, Joe is dedicated to ensuring your real estate experience is seamless and satisfying.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 col-lg-4 py-3 py-md-0">
                    <div className="card">
                        <img src="./Photos/Xi-Jinping.jpg" alt="Xi Jinping" />
                        <h4><span className="Goldenyellowbackground">Xi Jinping</span></h4>
                        <p>
                            Xi Jinping, a seasoned expert in real estate, is here to guide you in your real estate endeavors at Gradienthome. His in-depth knowledge of the local market and commitment to transparency and integrity ensure that you achieve your real estate goals with confidence.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </section> */} 

        <GoogleMap /> 
        <Footer /> 
      
    </>
  );
}

export default About;