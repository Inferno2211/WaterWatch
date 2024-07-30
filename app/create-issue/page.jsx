'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateIssue = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        title: '',
        category: '',
        description: '',
    });

    // const { data: session } = useSession();
    const router = useRouter();

    const createIssue = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/issue/new', {
                method: 'POST',
                body: JSON.stringify({
                    
                }),
            });

            if (response.ok) {
                setPost({
                    title: '',
                    category: '',
                    description: '',
                    image: '',
                });
                router.push('/');
            } else {
                console.error('Failed to create issue');
            }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setSubmitting(false);
            }
    };

    return (
        <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createIssue}
        />
    );
};

export default CreateIssue;