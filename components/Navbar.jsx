"use client";
import '@styles/header.css'
import React from 'react'
import Link from 'next/link';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    return (
        <nav className="sidebar">
            <div className='mt-4 container'>
                <a href="#">Home</a>
                <a href="#">Explore</a>
                <a href="#">Your Posts</a>
            </div>
            <div className="sidebar-bottom">
                <Link href="/create-issue" ><button className="report-button">Report an Issue</button></Link>
                <button className="logout-button" onClick={() => {
                    signOut();
                }}>Logout</button>
                <a href="/">Help & Feedback</a>
            </div>
        </nav>
    )
}

export default Navbar