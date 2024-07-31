import { useSession } from 'next-auth/react';
import Image from "next/image"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    const { data: session } = useSession();

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
        <div className="max-w-xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
                <input 
                type="text" 
                placeholder="Add title here" 
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            
            <div className="mb-6">
                    <div className="details-container">
                        <button className=" text-gray-800 py-1 px-3 rounded flex items-center">
                            <span className="mr-2">Category</span>
                            <span className="bg-gray-200 px-2 py-0.5 rounded">+ Add label</span>
                        </button>
                        
                        <button className=" text-gray-800 py-1 px-3 rounded flex items-center">
                            <span className="mr-2">Due Date</span>
                            <span className="bg-gray-200 px-2 py-0.5 rounded">+ Add date</span>
                        </button>
                        
                        <button className=" text-gray-800 py-1 px-3 rounded flex items-center">
                            <span className="mr-2">Priority</span>
                            <span className="bg-gray-200 px-2 py-0.5 rounded">+ Add priority</span>
                        </button>
                        
                        <button className=" text-gray-800 py-1 px-3 rounded flex items-center">
                            <span className="mr-2">Status</span>
                            <span className="bg-gray-200 px-2 py-0.5 rounded">+ Add status</span>
                        </button>
                        
                        <button className="bg-gray-100 text-gray-800 py-1 px-3 rounded w-full mt-2">
                            <span>+ Add more properties</span>
                        </button>
                    </div>
            </div>
            <div className='hl' />
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2" htmlFor="image">
                Image
                </h2>
                <input 
                type="file" 
                id="image" 
                onChange={handleImageChange} 
                className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                />
            </div>
            <div className='hl' />
            <div>
                <h2 className="text-lg font-semibold mb-2">DESCRIPTION</h2>
                <div className="flex items-start space-x-4">
                <Image
                    src={session?.user.image} 
                    width={35}
                    height={35}
                    alt="User Avatar" 
                    className="w-10 h-10 rounded-full"
                />
                <textarea 
                    placeholder="Add a more detailed description..." 
                    value={post.description}
                    onChange={(e) => setPost({ ...post, description: e.target.value })}
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                    rows="4"
                ></textarea>
                </div>
            </div>
            </div>
        </div>
        );
};

export default Form;