import React, { useRef } from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import { Opacity } from '@mui/icons-material';

const Step3 = ({ formData, handleImageChange, prevStep, handleSubmit, submitting, type, nextStep }) => {
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setFile(file);
            // Add your logic to handle the file
            console.log(file);
        }
    };
    const fileInputRef = useRef(null);

    const handleBrowseClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    return (
        <div className="container">
            {/* <div className="navbar"> */}
            {/* </div> */}
            <div className="content">
               
                <div className="main">
                <div className="App">
                        <ProgressBar />
                        <div className="progress-line Three"></div>
                    </div>
                    <div className="text">
                        <span className="text__header">
                            Upload a clear image
                        </span>
                        <span className="text__sub">
                            Make your problems heard to the right people.
                        </span>
                    </div>
                    <div className="upload">
                        
                        <div
                            className="upload"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <input
                                type="file"
                                id="image"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                style={{opacity : 0}}
                                className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                            />
                            <div className="text__upload">
                                Drag & drop your files here
                            </div>
                            <div className="text__or">OR</div>
                            <div className="browse__files next">
                                <a href="#" onClick={handleBrowseClick}>Browse Files</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='btn-row'>
                    <button
                        onClick={prevStep}
                        className="btn bg-gray-500 text-white py-2 px-12 rounded focus:outline-none mt-7"
                    >
                        Back
                    </button>
                    <button
                        onClick={nextStep}
                        className="btn bg-blue-500 text-white py-2 px-12 rounded focus:outline-none mt-7">
                        Next
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Step3;