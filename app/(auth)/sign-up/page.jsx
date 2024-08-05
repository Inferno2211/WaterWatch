"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession, getProviders } from 'next-auth/react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './style.css';

const Page = () => {
  const [active, setActive] = useState(false);
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  const toggleClass = () => {
    setActive(!active);
  };

  const { data: session } = useSession();
  //provider = Object.values(providers)[0];
  const signInFunc = (provider) =>{
    signIn(provider.id, { callbackUrl: '/' });
  }

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <div className={`container ${active ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
          {providers && Object.values(providers).map((provider) => (
                            <a type="button" key={provider.name}
                            onClick={() => signInFunc(provider)} className='icon'>
                                <FaGooglePlusG />
                            </a>
            ))}
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            {providers && Object.values(providers).map((provider) => (
                            <a type="button" key={provider.name}
                                onClick={() => signInFunc(provider)} className='icon'>
                                <FaGooglePlusG />
                            </a>
            ))}
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          <span>or use your email for password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden1" id="login" onClick={toggleClass}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden1" id="register" onClick={toggleClass}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;