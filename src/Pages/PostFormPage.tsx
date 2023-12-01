import React from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';
import '../App.css';
import { Link } from 'react-router-dom';

interface PostFormPageProps {
    isEditing?: boolean;
}

const PostFormPage: React.FC<PostFormPageProps> = ({ isEditing }) => {
    const { id } = useParams<{ id?: string }>();

    return (
        <div>
            <h2>{isEditing ? 'Edit Post' : 'Create Post'}</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/new-post">Add</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
            <PostForm isEditing={!!isEditing} />
        </div>
    );
};

export default PostFormPage;