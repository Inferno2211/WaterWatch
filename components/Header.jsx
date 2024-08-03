"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from "next/image";
import "@styles/header.css";
const Header = () => {
    const { data: session } = useSession();
    const [searchQuery, setSearchQuery] = useState('');

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const handleNotificationClick = () => {
      window.location.href = 'notifications.html'; // Replace with your actual URL
    };
  
    const handleCommentClick = () => {
      window.location.href = 'comments.html'; // Replace with your actual URL
    };
  
    const handleLogoutClick = () => {
      // You can replace this with actual logout logic
      alert('You have been logged out.');
      window.location.href = 'login.html'; // Replace with your actual login page URL
    };
  
    const handleGoClick = () => {
      if (searchQuery) {
        // Redirect to a search results page with the query as a parameter
        window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`; // Replace with your actual search results URL
      } else {
        alert('Please enter a search query.');
      }
    };
    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };

        setUpProviders();
    }, []);

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            {/* <Link href='/' className='flex gap-2 flex-center'>
                <h1>WaterWatch</h1>
            </Link> */}

            {/* Desk nav */}
            <div className='sm:flex hidden flex-center gap-5'>
            <div className="container">
      <header>
        <div className="logo">WaterWatch</div>
        <div className="header-search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="go-button" onClick={handleGoClick}>Go</button>
        </div>
        <div className="header-buttons">
          <button 
            className="notification-button" 
            title="Notifications" 
            onClick={handleNotificationClick}
          >
            <i className="fa-regular fa-bell"></i>
          </button>
          <button 
            className="comment-button" 
            title="Comments" 
            onClick={handleCommentClick}
          >
            <i className="fa-regular fa-comment-dots"></i>
          </button>
        </div>
        <div className="user">
          <span className="username">{session?.user.name}</span>
          <Link href='/your-posts' className=''>
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>

        </div>
      </header>
      <div className="main-content">
        <aside>
          <nav className="sidebar">
            <div>
              <a href="#">Home</a>
              <a href="#">Explore</a>
              <a href="#">Your Posts</a> 
            </div>
            <div className="sidebar-bottom">
              <button className="report-button">Report an Issue</button>
              <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
              <a href="#">Help & Feedback</a>
            </div>
          </nav>
        </aside>
      </div>
    </div>
             </div>

            {/* Mob nav */}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex" >
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}>
                                    My Profile
                                </Link>

                                <Link
                                    href="/create-issue"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}>
                                    Create Issue
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className="mt-5 w-full black_btn">
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type="button" key={provider.name}
                                onClick={() => signIn(provider.id)} className='main_btn'>
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    );
};

export default Header;