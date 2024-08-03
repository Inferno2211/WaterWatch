import React, { useRef } from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import { Opacity } from '@mui/icons-material';
import '@styles/issue.css';

const Step4 = ({ formData, handleImageChange, prevStep, handleSubmit, submitting, type, nextStep }) => {
    return(
        <div className="container">
            <div className="content">
                <div className="main">
                <div className="App">
                        <ProgressBar />
                        <div className="progress-line Four"></div>
                    </div>
                    <div className="text">
                        <span className="text__header">Tag the Council Member</span>
                        <span className="text__sub">Make your problems heard to the right people.</span>
                    </div>
                    <div className="container__4">
                        {[1, 2].map((item, index) => (
                            <div className="card" key={index}>
                                <div className="cardContent">
                                    <img 
                                        src="/path/to/image.png" 
                                        className="avatar" 
                                    />
                                    <div className="textContainer">
                                        <h3 className="name">Eduardo Chapman <span className="verified">✔</span></h3>
                                        <p className="position">MLA, North-east Delhi</p>
                                        <p className="description">
                                            Ullamco laboru laboris adpisicing nulla duis aute commodo ex sint nostrud anim anim ex culpaudat minim dolor. Deserunt deserunt eu officia voluptate culpa sint.
                                        </p>
                                    </div>
                                    <a href="#" className="contact">Contact</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='btn-row flex'>
                    <button
                        onClick={prevStep}
                        className="btn bg-gray-500 text-white py-2 px-12 rounded focus:outline-none"
                    >
                        Back
                    </button>
                    <button
                        onClick={nextStep}
                        className="btn bg-blue-500 text-white py-2 px-12 rounded focus:outline-none mr-12">
                        Next
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
};
export default Step4;