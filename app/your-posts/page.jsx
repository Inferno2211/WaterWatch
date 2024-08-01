"use client";

import IssueCard from '@components/IssueCard';
import React, { useState, useEffect } from 'react';
// import './style.css';

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
                    <img src="/assets/image/bg.svg" className="w-full h-72 object-cover rounded-lg" alt="" />
                </div>
                <div className="hello">
                    <img
                        src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        className="fixed w-28 h-28 object-cover rounded-full"
                        alt=""
                    />
                </div>
                <br /><br />
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-semibold">Swapnil Singh</h2>
                </div>
                <span className="flex items-center justify-center text-lg text-gray-500">@swapnil2468</span>
                <p className="mt-3">My Profile</p>
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
