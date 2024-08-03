"use client";

import { useState } from "react";
import Image from "next/image";

const IssueCard = ({post, handleTagClick}) => {
    console.log(post.image);
    return (
        <section className="flex justify-center items-center">
            <div className="flex flex-col md:flex-row w-full max-w-4xl space-x-4 bg-white shadow-md rounded-lg p-6">
                <div className="relative w-[69px] h-[69px] bg-[#ccb8f3] opacity-100 overflow-hidden rounded-full flex-shrink-0">
                    <Image
                        src={post.creator.image}
                        alt="avatar"
                        width={70}
                        height={70}
                        className="w-full h-full"
                    />
                </div>
                <main className="flex-grow pl-1">
                    <span className="font-bold leading-8">{post.creator.username}</span>
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <div className="w-full">
                        <p>{post.description}</p>
                        <p className="mt-2 text-sm text-gray-600">Location: {post.location}</p>
                        <div className="flex items-center mt-2">
                            <span className="text-sm text-blue-500 cursor-pointer" onClick={() => handleTagClick(post.tags)}>
                                #{post.tags}
                            </span>
                        </div>
                    </div>
                    {post.image && (
                        <div className="mt-4">
                            <img
                                src={post.image}
                                alt="Issue"
                                className="w-[300px] h-[150px] object-cover rounded-lg"
                            />
                        </div>
                    )}
                </main>
            </div>
        </section>
    );
};

export default IssueCard;