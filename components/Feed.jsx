"use client";

import { useState, useEffect } from 'react';
import IssueCard from './IssueCard';
import IssueCardFull from './IssueCardFull';
import '@styles/globals.css';

export const IssueCardList = ({ data, handleTagClick, isFullWidth }) => {
    return (
        <div className='feed justify-center m-5'>
            {data.map((post) => (
                isFullWidth ? (
                    <IssueCardFull
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                ) : (
                    <IssueCard
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                )
            ))}
        </div>
    );
};

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [isFullWidth, setIsFullWidth] = useState(false);

    const toggleLayout = () => {
        setIsFullWidth(prevState => !prevState);
    };

    useEffect(() => {
        const fetchIssues = async () => {
            const response = await fetch('api/issue');
            const data = await response.json();
            console.log(data);
            setPosts(data);
        };

        fetchIssues();
    }, []);

    return (
        <div className="flex flex-col items-center mt-5">
            <button
                onClick={toggleLayout}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded self-end mr-10"
            >
                Toggle Layout
            </button>

            <section className='mx-5 w-full'>
                <IssueCardList
                    data={posts}
                    handleTagClick={() => { }}
                    isFullWidth={isFullWidth}
                />
            </section>
        </div>
    );
};

export default Feed;