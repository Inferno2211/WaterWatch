'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Header = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };

        // setProviders();
    }, []);

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <h1>WaterWatch</h1>
            </Link>

            {/* Desk nav */}
            <div className='sm:flex hidden flex-center gap-5'>
                {isUserLoggedIn ? (
                    <div className='flex gap-3'>
                        <Link href="/create-issue" className='main_btn'>
                            Create Issue
                        </Link>

                        <button type='button' onClick={signOut} className='main_btn'>
                            Sign Out
                        </button>

                        <Link href='/profile' className=''>
                            Img
                        </Link>
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

            {/* Mob nav */}
            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? (
                    <div className="flex" onClick={() => setToggleDropdown((prev) => !prev)}>
                        <span>Logo</span>
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