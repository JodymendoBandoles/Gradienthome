import React from "react";
import JeffBezos from '../assets/JeffBezos.jpg';
import ElonMusk from '../assets/ElonMusk.jpg';
import BernardArnault from '../assets/BernardArnault.jpg';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container mt-5">
                <h2 className="text-center">From our Happy Parents</h2>
                <div className="row justify-content-center mb-5">
                    <div className="col-md-4">
                        <div className="testimonial text-center mb-5">
                            <img src={JeffBezos} alt="Jeff Bezos picture" />
                            <p>"As a first-time homebuyer, I couldn't have asked for a better experience with GradientHome. Their team guided me through the entire process with patience and expertise. They listened to my needs and found the perfect home for me. Their attention to detail and responsiveness were outstanding. I highly recommend GradientHome to anyone looking to purchase their dream home."</p>
                            <h3>Jeff Bezos</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial text-center mb-5">
                            <img src={ElonMusk} alt="Elon Musk picture" />
                            <p>"Relocating to a new city can be a daunting task, but thanks to GradientHome, the process was seamless. They understood our unique requirements and helped us find a home that met our needs perfectly. Their knowledge of the local real estate market was invaluable. GradientHome made our transition smooth and stress-free. We are grateful for their excellent service."</p>
                            <h3>Elon Musk</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial text-center mb-5">
                            <img src={BernardArnault} alt="Bernard Arnault picture" />
                            <p>"I recently purchased an investment property with the assistance of [Real Estate Agent's Name] from GradientHome. Their deep understanding of the investment property market and keen eye for promising opportunities were crucial in helping me make a sound investment. They provided valuable insights and guided me through negotiations. I'm delighted with the property and the potential it holds. I highly recommend GradientHome for real estate investment needs."</p>
                            <h3>Bernard Arnault</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;