import { useRef, useState } from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import { Opacity } from '@mui/icons-material';

const Step3 = ({ formData, handleImageChange, prevStep, nextStep }) => {
    const [imagePreview, setImagePreview] = useState(formData.image);

    const imageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
        handleImageChange(event);
    };
    return (
        <div className="container">
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

                        {/* <div
                            className="upload"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        > */}
                        <label htmlFor="image"
                            className="browse__files next cursor-pointer block w-full text-sm py-2 px-4 border border-gray-300 rounded-md bg-gray-50">
                            Browse Files
                        </label>

                        <input
                            type="file"
                            id="image"
                            onChange={imageChange}
                            style={{ display: 'none' }}
                        />
                        {imagePreview && (
                            <div className="mt-4">
                                <img
                                    src={imagePreview}
                                    alt="Selected"
                                    className="w-32 h-32 object-cover border border-gray-300 rounded-md"
                                />
                            </div>
                        )}
                        {/* <div className="text__upload">
                                Drag & drop your files here
                            </div>
                            <div className="text__or">OR</div>
                            <div className="browse__files next">
                                <a href="#" onClick={handleBrowseClick}>Browse Files</a>
                            </div>
                        </div> */}
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