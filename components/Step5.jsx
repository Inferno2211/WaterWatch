import React, { useRef } from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import '@styles/issue.css';
import IssueCardFullWidth from './IssueCardFull';
import { create } from '@mui/material/styles/createTransitions';

const Step5 = ({ formData, prevStep, handleSubmit, submitting, type }) => {
    const { data: session } = useSession();
    const postdata = {
        creator: session?.user,
        title: formData.title,
        tags: formData.tags,
        description: formData.description,
        location: formData.location,
        image: formData.image
    }
    return (
        <div className="container">
            <div className="content">
                <div className="main">
                    {/* <div className="App">
                        <ProgressBar />
                        <div className="progress-line Five"></div>
                    </div> */}
                    <div className="text ">
                        <span className="text__header">Final post Review</span>
                        <span className="text__sub">Make your problems heard to the right people</span>
                    </div>
                    <div className='m-5'>
                        <IssueCardFullWidth
                            key={" "}
                            post={postdata}
                            handleTagClick={() => { }}
                        />
                    </div>
                    <div className='btn-row mt-40 flex justify-between'>
                        <button
                            onClick={prevStep}
                            className="btn bg-gray-500 text-white py-2 px-12 rounded focus:outline-none"
                        >
                            Back
                        </button>

                        <button
                            onClick={handleSubmit}
                            disabled={submitting}
                            className="btn bg-blue-500 text-white py-2 px-12 rounded focus:outline-none"
                            type="submit">
                            {submitting ? `${type}...` : type}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step5;
