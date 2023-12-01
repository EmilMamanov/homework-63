import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

interface PostFormProps {
    isEditing: boolean;
}

interface Post {
    title: string;
    body: string;
    createdTime?: string;
}

const PostForm: React.FC<PostFormProps> = ({ isEditing }) => {
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Post>({ title: '', body: '' });

    useEffect(() => {
        if (isEditing) {
            const fetchPost = async () => {
                try {
                    const response = await axios.get(`https://emil-s-blog-project-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
                    if (response.data) {
                        setFormData(response.data);
                    }
                } catch (error) {
                    console.error('Error fetching post:', error);
                }
            };

            (async () => {
                await fetchPost();
            })();
        }
    }, [id, isEditing]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const newPostData = {
                ...formData,
                createdTime: new Date().toISOString(),
            };

            if (isEditing) {
                await axios.put(`https://emil-s-blog-project-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`, newPostData);
            } else {
                await axios.post('https://emil-s-blog-project-default-rtdb.europe-west1.firebasedatabase.app/posts.json', newPostData);
            }

            navigate('/');
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="inputs">
                <label htmlFor="title">Blog title:</label>
                <input className="title-input"
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="body">Blog description:</label>
                <textarea className="description-input"
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                    required
                ></textarea>
            </div>
            <div>
                <button type="submit">{isEditing ? 'Save' : 'Create'}</button>
            </div>
        </form>
    );
};

export default PostForm;