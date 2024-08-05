"use client";

import { useState, useEffect} from 'react'
import IssueCard from './IssueCard';
import { handleClientScriptLoad } from 'next/script';
import '@styles/globals.css';

export const IssueCardList = ({ data, handleTagClick, filter }) => {
    return (
        <div className='feed'>
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

const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);
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
        <section className='m-5'>
            <IssueCardList
                data={posts}
                handleTagClick={() => {}}
            />
        </section>
    );
};

export default Feed;