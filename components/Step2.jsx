import React ,{useState}from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import '@styles/issue.css'

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
    const { data: session } = useSession();

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [
        'Water Pollution',
        'Water Scarcity',
        'Water Quality',
        'Flooding',
        'Drought'
    ];

    const handleButtonClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setDropdownVisible(false);
    };
    return (
        <div className="container">
            {/* <div className="navbar"></div> */}
            <div className="content">
                {/* <div className="sidebar"></div> */}
                <div className="main">
                    <div className="App">
                        <ProgressBar />
                        <div className="progress-line Two"></div>
                    </div>
                    {/* <div className="image">
                        <Image src='/assets/images/2.jpg' width={850} height={40} />
                    </div> */}
                    <div className="text">
                        <span className="text__header">
                            Add Relevant details
                        </span>
                        <span className="text__sub">
                            Make your problems heard to the right people.
                        </span>
                    </div>
                    <div className="container__3">
                        <input
                            type="text"
                            placeholder={selectedCategory ? ` ${selectedCategory}` : 'Add title here'}
                            value={formData.title}
                            onChange={handleChange('title')}
                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 mb-4"
                        />
                        <div className="category">
                            <span>Category</span>
                            <button className="label__btn" onClick={handleButtonClick}>+ Add label</button>
                            {dropdownVisible && (
                                <ul className="dropdown">
                                    {categories.map((category, index) => (
                                        <li key={index} onClick={() => handleCategoryClick(category)}>
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
                            />
                        </div>
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
    );
};
export default Step2;