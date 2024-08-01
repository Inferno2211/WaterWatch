import React from 'react';

const Step3 = ({ formData, handleImageChange, prevStep, handleSubmit, submitting, type }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
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
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="bg-green-500 text-white py-2 px-4 rounded focus:outline-none"
                    type="submit"
                >
                    {submitting ? `${type}...` : type}
                </button>
            </div>
        </div>
    );
};

export default Step3;