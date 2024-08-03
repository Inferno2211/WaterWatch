"use client";

import IssueCard from '@components/IssueCard';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import './style.css';

const IssueCardList = ({ data, handleTagClick }) => {
        return (
            <div className='flex mt-16 prompt_layout'>
                {data.map((post) => (
                    <IssueCard 
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                ))}
            </div>
        );
    };

const YourPosts = () => {
    const [activeTab, setActiveTab] = useState('#security');
    const [posts, setPosts] = useState([]);
    const { data: session } = useSession();
    const copyLink = () => {
        const copyText = document.getElementById('profileLink');
        copyText.select();
        document.execCommand('copy');
        alert('Copied the text: ' + copyText.value);
    };

    const handleTabClick = (e, target) => {
        e.preventDefault();
        setActiveTab(target);
    };
    useEffect(() => {
        const fetchIssues = async () => {
            const response = await fetch('api/issue');
            const data = await response.json();
            console.log(data);

            setPosts(data);
        }

        fetchIssues();
    }, []);


    
    
    return (
        <div className="pl-0 md:pl-64 transition-all" id="main">
            <div className="p-4">
                <div className="relative">
                    <Image src="/assets/images/bg.svg" 
                    className="w-full h-72 object-cover rounded-lg" 
                    alt="" 
                    width={0}
                    height={72}
                    // sizes="100vw"
                    // style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="hello">
                    <Image
                        src={session?.user.image}
                        className="lol flex items-center justify-center w-28 h-28 rounded-full"
                        alt=""
                        width={256}
                        height={256}
                        // sizes="100vw"
                        // style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-semibold">{session?.user.name}</h2>
                </div>
                <span className="flex items-center justify-center text-lg text-gray-500">@{session?.user.email}</span>
                <p className='my-profile'>My Profile</p>
                <div className="profile-link">
                    <input type="text" value="https://www.profilelink.com" id="profileLink" readOnly />
                    <div className="copy-icon" onClick={copyLink}>Copy</div>
                </div>
                <div className="hero mt-4 tab-indicator border-b border-gray-200">
                    <span
                        data-toggle="tab"
                        data-target="#security"
                        className={activeTab === '#security' ? 'active' : ''}
                        onClick={(e) => handleTabClick(e, '#security')}
                    >
                        Your Posts
                    </span>
                    <span
                        data-toggle="tab"
                        data-target="#activities"
                        className={activeTab === '#activities' ? 'active' : ''}
                        onClick={(e) => handleTabClick(e, '#activities')}
                    >
                        Your Replies
                    </span>
                </div>
                <div id="security" className={`tab-content ${activeTab === '#security' ? '' : 'hidden'}`}>
                <IssueCardList
                data={posts}
                handleTagClick={() => {}}
                />  
                </div>
                <div id="activities" className={`tab-content ${activeTab === '#activities' ? '' : 'hidden'}`}>
                    {/* Your Replies content here */}
                </div>
            </div>
        </div>
    );
};

export default YourPosts;
