import React from 'react';

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
            <input
            type="text"
            placeholder="Add location"
            value={formData.location}
            onChange={handleChange('location')}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="flex justify-between">
            <button
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded focus:outline-none"
            >
            Back
            </button>
            <button
            onClick={nextStep}
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
            >
            Next
            </button>
        </div>
        </div>
    );
};

export default Step2;