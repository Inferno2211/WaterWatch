"use client";
import '@styles/header.css'
import React from 'react'
import Link from 'next/link';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
    return (
        <nav className="sidebar">
            <div className='mt-4 container'>
                <a className='sty' href="/">Home</a>
                <a className='sty' href="#">Explore</a>
                <a className='sty' href="/your-posts">Your Posts</a>
            </div>
            <div className="sidebar-bottom">
                <Link href="/create-issue" ><button className="report-button">Report an Issue</button></Link>
                {session?.user ? (
                    <button className="logout-button" onClick={() => {
                        signOut();
                    }}>Logout</button>
                ) : (
                    <Link href="/sign-up">
                        <button className='logout-button'>
                            Sign In
                        </button>
                    </Link>)
                }
                <a href="/">Help & Feedback</a>
            </div>
        </nav>
    )
}

export default Navbar