import { useState, useRef, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import '@styles/issue.css';

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
    const { data: session } = useSession();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedTag, setSelectedTag] = useState(formData.tags || '');

    const categories = [
        'Water Pollution',
        'Water Scarcity',
        'Water Quality',
        'Flooding',
        'Drought'
    ];

    const dropdownRef = useRef(null);

    // Handle clicks outside of the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleButtonClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        setDropdownVisible(false);
        handleChange('tags')({ target: { value: tag } });
    };

    return (
        <div className="main">
            <div className="App">
                <ProgressBar />
                <div className="progress-line Two"></div>
            </div>
            <div className="text">
                <span className="text__header">Add Relevant details</span>
                <span className="text__sub">Make your problems heard to the right people.</span>
            </div>
            <div className="container__3">
                <div className='details'>
                    <input
                        type="text"
                        placeholder={'Add title here'}
                        value={formData.title}
                        onChange={handleChange('title')}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 mb-4"
                        name="title"
                    />
                </div>
                <div className="category" ref={dropdownRef}>
                    <span>Category:</span>
                    {selectedTag && <p>{selectedTag}</p>}
                    <button className="label__btn" onClick={handleButtonClick}>
                        {selectedTag ? 'Change tag' : '+ Add tag'}
                    </button>
                    {dropdownVisible && (
                        <ul className="dropdown">
                            {categories.map((category, index) => (
                                <li key={index} onClick={() => handleTagClick(category)} className="dropdown-item">
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <hr />
                <div className="description">DESCRIPTION</div>
                <div className="description__box">
                    <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                    />
                    <textarea
                        value={formData.description}
                        onChange={handleChange('description')}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                        placeholder="Add a more detailed description..."
                        rows="4"
                        name="description"
                    />
                </div>
            </div>
            <div className='btn-row'>
                <button
                    onClick={prevStep}
                    className="btn bg-gray-500 text-white py-2 px-12 rounded focus:outline-none"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    className="btn bg-blue-500 text-white py-2 px-12 rounded focus:outline-none mr-9"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step2;