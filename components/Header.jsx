'use client';

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
            <Link href='/' className='flex gap-2 flex-center'>
                <h1>WaterWatch</h1>
            </Link>

            {/* Desk nav */}
            <div className='sm:flex hidden flex-center gap-5'>
                {session?.user ? (
                    <div className='flex gap-3'>
                        <Link href="/create-issue" className='main_btn'>
                            Create Issue
                        </Link>

                        <button type='button' onClick={signOut} className='main_btn'>
                            Sign Out
                        </button>

                        <div className="vl"></div>
                        <p className='name'>{session?.user.name}</p>
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
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <Link href = "/sign-up"
                                //onClick={() => signIn(provider.id)} 
                                className='main_btn'>
                                Sign In
                            </Link>
                        ))}
                    </>
                )}
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