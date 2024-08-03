'use client';

import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
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
            <div className="flex mx-auto p-4">
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
                        nextStep={nextStep}
                        submitting={submitting}
                        type={type}
                        handleSubmit={handleSubmit}
                    />
                )}
                {currentStep === 4 && (
                    <Step4
                        formData={post}
                        handleImageChange={handleImageChange}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        submitting={submitting}
                        type={type}
                        handleSubmit={handleSubmit}
                    />
                
                )}
                {currentStep === 5 && (
                    <Step5
                        formData={post}
                        handleImageChange={handleImageChange}
                        prevStep={prevStep}
                        submitting={submitting}
                        type={type}
                        handleSubmit={handleSubmit}
                    />
                
                )}
            </div>
    );
};

export default Form;