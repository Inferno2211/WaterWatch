import React from 'react';
import Link from "next/link";
import ProgressBar from './ProgressBar';
import Image from "next/image";
import '@styles/issue.css'
const Step1 = ({ formData, handleChange, nextStep }) => {
    return (
        <div className="container">
            {/* <div className="navbar"></div> */}
            <div className="content">
                {/* <div className="sidebar"></div> */}
                <div className="App">
                    <div className="progress-line"></div>
                    <ProgressBar />
                </div>
                {/* <Image src='/assets/images/1.jpg' width={850} height={40}/> */}
                <div className="main-thing">
                <div className="text">
                    <span className="text__header">
                    Locate the issue site
                    </span>
                    <span className="text__sub">
                    Make your problems heard to the right people.
                    </span>
                </div>
                <div className="maps">
                    <div className="search">
                    <span className="search__header">
                        Enter a nearby postcode, or street name and area:
                    </span>
                    <span className="search__sub">
                        For eg: North-east Delhi
                    </span>
                    <div className="search__bar">
                        <input
                            type="text"
                            placeholder="Add location"
                            value={formData.location}
                            onChange={handleChange('location')}
                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                            />
                        <div className="go">
                        Go
                        </div>
                    </div>
                    </div>
                    <div className="map">
                    <Image src="/assets/images/map.png" width={400} height={380}/> 
                    </div>
                </div>
                <div className="warning mb-6">
                    <div className="warning__header">
                    Message from General Council
                    </div>
                    <div className="warning__sub">
                    If you are reporting an issue you consider to be dangerous or an emergency please call our Out of Hours Team on 0300 303 8671.
                    </div>
                </div>
                <button
                    onClick={nextStep}
                    className="next-btn bg-blue-500 text-white py-2 px-12 rounded focus:outline-none">
                    Next
                </button>
                </div>
            </div>
            </div>
    );
};

export default Step1;