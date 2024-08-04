import React, { useRef } from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import '@styles/issue.css';

const Step5 = ({ formData, handleImageChange, prevStep, handleSubmit, submitting, type, nextStep }) => {
    return(
        <div className="container">
        <div className="content">
            <div className="main">
            <div className="App">
                        <ProgressBar />
                        <div className="progress-line Five"></div>
                    </div>
                <div className="text">
                    <span className="text__header">Final post Review</span>
                    <span className="text__sub">Make your problems heard to the right people</span>
                </div>
                
                
                <div className='btn-row mt-52 flex justify-between'>
                    <button
                        onClick={prevStep}
                        className="btn bg-gray-500 text-white py-2 px-12 rounded focus:outline-none"
                    >
                        Back
                    </button>
                    
                <button
                        className="btn bg-blue-500 text-white py-2 px-12 rounded focus:outline-none">
                        Post
                    </button></div>
                
            </div>
        </div>
    </div>
    );
};

export default Step5;
