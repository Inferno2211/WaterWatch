"use client";

import { useState, useEffect} from 'react'
import IssueCard from './IssueCard';
import { handleClientScriptLoad } from 'next/script';

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
        <section className='feed'>
            <IssueCardList
                data={posts}
                handleTagClick={() => {}}
            />
        </section>
    );
};

export default Feed;