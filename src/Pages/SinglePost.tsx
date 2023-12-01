import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

interface Post {
    id: string;
    title: string;
    createdTime?: string;
    body: string;
}

const SinglePost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://emil-s-blog-project-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
                if (response.data) {
                    setPost({ id, ...response.data });
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        (async () => {
            await fetchPost();
        })();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://emil-s-blog-project-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
            navigate('/', { replace: true });
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            {post && (
                <div className="single-post-div">
                    <h2>{post.title}</h2>
                    <p>{post.createdTime}</p>
                    <p>{post.body}</p>
                    <Link className="edit-btn" to={`/posts/${id}/edit`}>Edit</Link>
                    <button className="delete-btn" onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default SinglePost;