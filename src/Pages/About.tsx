import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/new-post">Add</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
            <h2>About Us</h2>
            <p>This is the about us page content.</p>
        </div>
    );
};

export default About;