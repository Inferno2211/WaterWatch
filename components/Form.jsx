'use client';

import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (input) => (e) => {
        setPost({ ...post, [input]: e.target.value });
    };

    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPost({ ...post, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href='/' className='text-white text-sm bg-purple-500 py-2 px-4 rounded focus:outline-none'>
                    &lt;- Cancel
                </Link>
            </div>
            <div className="max-w-xl mx-auto p-4">
                {currentStep === 1 && (
                    <Step1
                        formData={post}
                        handleChange={handleChange}
                        nextStep={nextStep}
                    />
                )}
                {currentStep === 2 && (
                    <Step2
                        formData={post}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )}
                {currentStep === 3 && (
                    <Step3
                        formData={post}
                        handleImageChange={handleImageChange}
                        prevStep={prevStep}
                        submitting={submitting}
                        type={type}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default Form;