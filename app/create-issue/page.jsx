'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';
import { useSession } from 'next-auth/react';

const CreateIssue = () => {
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        title: '',
        tags: '',
        description: '',
        location: '',
        image: '',
    });

    const router = useRouter();

    const createIssue = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const data = JSON.stringify({
                UserId:session?.user.id,
                title: post.title,
                tags:post.tags,
                description:post.description,
                location:post.location,
                image:post.image
            })
            // console.log(data);
            // console.log(session?.user);
            // return;

            const response = await fetch('/api/issue/new', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                setPost({
                    title: '',
                    category: '',
                    description: '',
                    location: '',
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