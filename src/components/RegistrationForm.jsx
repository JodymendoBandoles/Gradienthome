import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './Styles/RegistrationForm.css';
import { Link } from 'react-router-dom';

function RegistrationForm() {
    return (
        <>
            <div className="wrapper">
                <span className="bgs-animate"></span>
                <span className="bgs-animate2"></span>
                <div className="form-box reg register">
                    <h2>Sign Up</h2>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" name="Name" required />
                            <label>Name</label>
                            <i>
                                <FontAwesomeIcon icon={faUser} className="beating-icon" />
                            </i>
                        </div>

                        <div className="input-box">
                            <input type="text" name="Username" required />
                            <label>Username</label>
                            <i>
                                <FontAwesomeIcon icon={faUser} className="beating-icon" />
                            </i>
                        </div>

                        <div className="input-box">
                            <input type="password" required />
                            <label>Password</label>
                            <i>
                                <FontAwesomeIcon icon={faLock} />
                            </i>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="logreg-link">
                            <p>Already have an account? <Link to="/LoginForm">Login</Link></p>
                        </div>
                    </form>
                </div>

                <div className="info-text register">
                    <h2 className="animation">Welcome Back!</h2>
                    <p className="animation">Log in to discover your dream home today.</p>
                </div>
            </div>
            
        </>
    );
}

export default RegistrationForm;