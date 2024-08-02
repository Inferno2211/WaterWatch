"use client";
import React, { useState } from 'react';
import './style.css';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Signup = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const togglePanel = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="container" id="container">
            <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                <form>
                    <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FaGooglePlusG /></a>
                        <a href="#" className="icon"><FaFacebookF /></a>
                        <a href="#" className="icon"><FaGithub /></a>
                        <a href="#" className="icon"><FaLinkedinIn /></a>
                    </div>
                    <span>or use your email for {isSignUp ? 'registration' : 'login'}</span>
                    {isSignUp ? (
                        <>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </>
                    ) : (
                        <>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forget Your Password?</a>
                            <button>Sign In</button>
                        </>
                    )}
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel ${isSignUp ? 'toggle-left' : 'toggle-right'}`}>
                        <h1>{isSignUp ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
                        <p>{isSignUp ? 'Enter your personal details to use all of site features' : 'Register with your personal details to use all of site features'}</p>
                        <button className="hidden" onClick={togglePanel}>
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
