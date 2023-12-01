import React from 'react';
import BlogList from '../components/BlogList';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
    return (
        <div>
            <h1>My blog</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/new-post">Add</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
            <BlogList />
        </div>
    );
};

export default Home;