import React from 'react';

const Step1 = ({ formData, handleChange, nextStep }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
            <input
            type="text"
            placeholder="Add title here"
            value={formData.title}
            onChange={handleChange('title')}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <textarea
            placeholder="Add a more detailed description..."
            value={formData.description}
            onChange={handleChange('description')}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            rows="4"
            ></textarea>
        </div>
        <div className="mb-4">
            <input
            type="text"
            placeholder="Add tags"
            value={formData.tags}
            onChange={handleChange('tags')}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <button
            onClick={nextStep}
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none">
            Next
        </button>
        </div>
    );
};

export default Step1;