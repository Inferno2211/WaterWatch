"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from "next/image"

const Header = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

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
            <div className='sm:flex hidden flex-center gap-5'><div className="header">
      <header>
        <div className="logo">WaterWatch</div>
        <div className="header-search-bar">
          <input
            type="text"
            placeholder="Search"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="go-button" 
        //   onClick={handleSearchClick}
          >Go</button>
        </div>
        <div className="header-buttons">
          <button className="notification-button" title="Notifications"
        //   onClick={handleNotificationClick}
          >
            <i className="fa-regular fa-bell"></i>
          </button>
          <button className="comment-button" title="Comments" 
        //   onClick={handleCommentClick}
          >
            <i className="fa-regular fa-comment-dots"></i>
          </button>
        </div>
        <div className="user">
          <span className='name'>{session?.user.name}</span>
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
      {/* <div className="main-content">
        <aside>
          <nav className="sidebar">
            <div>
              <a href="#">Home</a>
              <a href="#">Explore</a>
              <a href="#">Your Posts</a>
            </div>
            <div className="sidebar-bottom">
            <Link href="/create-issue" className='main_btn'>
                            Create Issue
                        </Link>
            <button type='button' onClick={signOut} className='main_btn'>
                            Sign Out
                        </button>
              <a href="#">Help & Feedback</a>
            </div>
          </nav>
        </aside>
      </div> */}
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