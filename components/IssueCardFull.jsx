"use client";

import { useState } from "react";
import Image from "next/image";

const IssueCardFullWidth = ({ post, handleTagClick }) => {
    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg p-6 w-full transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="top-part flex items-center space-x-4 self-start justify-between w-full">
                <div className="creator-info flex items-center gap-5">
                    <div className="relative w-[50px] h-[50px] bg-[#ccb8f3] opacity-100 overflow-hidden rounded-full flex-shrink-0">
                        <Image
                            src={post.creator.image}
                            alt="avatar"
                            width={70}
                            height={70}
                            className="w-full h-full"
                        />
                    </div>

                    <div>
                        <p className="text-base font-extrabold text-neutral-900">
                            {post.title}
                        </p>
                        <p className="text-xs font-normal text-gray-600 font-manrope">
                            {post.date}, {post.time}
                        </p>
                    </div>
                </div>
                <button className="justify-center rounded-xl text-[11px] leading-[18px] font-normal text-purple-500 bg-purple-100 opacity-100 h-[28px] px-2">
                    {post.tags}
                </button>
            </div>

            <main className="flex mt-4 font-sans self-start flex-col w-full">
                <div className="text-sm leading-[22px] font-normal text-custom-dark p-1">
                    {post.description}
                </div>

                <div className="flex justify-between w-full items-center">
                    <div className="text-xs leading-[20px] font-normal text-custom-gray">
                        Sent to XYZ {/* {post.recipient} */}
                    </div>
                    <button className="justify-center rounded-xl text-[11px] leading-[18px] font-normal text-purple-500 bg-purple-100 opacity-100 h-[28px] px-2">
                        Read more
                    </button>
                </div>

                {post.image && (
                    <div className="flex flex-wrap gap-4 w-full overflow-auto mt-4">
                        <div className="w-full">
                            <Image
                                src={post.image}
                                alt="Issue"
                                width={600}
                                height={300}
                                className="object-cover flex-shrink-0 rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default IssueCardFullWidth;