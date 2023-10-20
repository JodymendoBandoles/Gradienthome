import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './Styles/LoginForm.css';
import { Link } from 'react-router-dom';


function LoginForm() {
    return (
        <>
            <div className="wrapper">
                <span className="bg-animate"></span>
                <span className="bg-animate2"></span>

                <div className="form-box login">
                    <h2 className="animation" style={{ "--i": 0, "--j": 21 }}>Login</h2>
                    <form action="#">
                        <div className="input-box animation" style={{ "--i": 1, "--j": 22 }}>
                            <input type="text" name="username" required />
                            <label>Username</label>
                            <i>
                                <FontAwesomeIcon icon={faUser} className="beating-icon" />
                            </i>
                        </div>
                        <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
                            <input type="password" required />
                            <label>Password</label>
                            <i>
                                <FontAwesomeIcon icon={faLock} />
                            </i>
                        </div>
                        <button type="submit" className="btn animation" style={{ "--i": 3, "--j": 24 }}>Login</button>
                        <div className="logreg-link animation" style={{ "--i": 4, "--j": 25 }}>
                            <p>Don't have an account? <Link to="/RegistrationForm">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
                <div className="info-text login">
                    <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>Welcome Back!</h2>
                    <p className="animation" style={{ "--i": 1, "--j": 21 }}>Log in to explore your dream homes</p>
                </div>
            </div>
        </>
    );
}

export default LoginForm;