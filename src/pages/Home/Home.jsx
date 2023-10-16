import React from "react";
import { Link,} from "react-router-dom";
import Navbar from "../../components/Navbar";
import bannerImage1 from '../../assets/Homepagebanner1.jpg';
import bannerImage2 from '../../assets/Homepagebanner2.jpg';
import Mobilebanner1 from '../../assets/Mobilebanner1.jpg';
import Mobilebanner2 from '../../assets/Mobilebanner2.jpg'; 
import "./Home.css";
import PropertyListing from "../../components/PropertyListing";
import GoogleMap from "../../components/GoogleMap";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";



function Home() {
    return (
        <> 
            <Navbar />

            <div id="HomepageMobileBanner" className="carousel slide d-sm-block d-lg-none" data-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#HomepageMobileBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="bannerimage1"></button>
                    <button type="button" data-bs-target="#HomepageMobileBanner" data-bs-slide-to="1" aria-label="bannerimage2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Mobilebanner1} className="d-block w-100" alt="banner image of a boy playing" />
                        <div className="carousel-caption">
                            <h1 className="mobilebanner-title">
                                Find Your Dream Home with GradientHome
                            </h1>
                            <p>Your Path to Exceptional Living Starts Here</p>
                            <p><Link to="/About/About" className="btn" id="bannerbtn">Learn More</Link></p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={Mobilebanner2} className="d-block w-100" alt="two kids playing" />
                        <div className="carousel-caption">
                            <h1 className="mobilebanner-title">
                                Elevate Your Lifestyle
                            </h1>
                            <p>Luxury Living, One Home at a Time</p>
                            <p><Link to="/About/About" className="btn" id="bannerbtn">Learn More</Link></p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#HomepageMobileBanner" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#HomepageMobileBanner" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div id="HomepagelgBanner" className="carousel slide d-none d-lg-block d-sm-none" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#HomepagelgBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="bannerimage1"></button>
                    <button type="button" data-bs-target="#HomepagelgBanner" data-bs-slide-to="1" aria-label="bannerimage2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerImage1} className="d-block w-100" alt="Gradient home real estate office" />
                        <div className="carousel-caption">
                            <h1>
                                Find Your Dream Home with GradientHome
                            </h1>
                            <p>Your Path to Exceptional Living Starts Here</p>
                            <p><Link to="/About/About" className="btn" id="bannerbtn">Learn More</Link></p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={bannerImage2} className="d-block w-100" alt="banner image of a boy playing" />
                        <div className="carousel-caption">
                            <h1>
                                Elevate Your Lifestyle
                            </h1>
                            <p>Luxury Living, One Home at a Time</p>
                            <p><Link to="/About/About" className="btn" id="bannerbtn">Learn More</Link></p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#HomepagelgBanner" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" area-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#HomepagelgBanner" data-bs-slide="next">
                    <span className="carousel-control-next-icon" area-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section class="container-md">
                <div class="row">
                    <div class="col-md-6 order-md-2">
                        <h2>Why Real Estate Is the <span class="caption-keywords">Best Investment</span> Choice</h2>
                        <p>Real estate is a favored investment due to its blend of stability, consistent cash flow, and the potential for appreciation. Unlike volatile markets, it offers a reliable source of income through rents and the opportunity for long-term growth. Additionally, the ability to leverage investments can boost returns. With a track record of financial security and wealth accumulation, real estate remains a top choice for investors.</p>
                    </div>
                    <div class="col-md-6 order-md-2">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/b3x7vpny5jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <PropertyListing />
            <GoogleMap /> 
            <Testimonials />
            <Footer />

        </>
    )
}

export default Home