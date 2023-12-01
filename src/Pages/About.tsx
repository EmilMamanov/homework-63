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
            <h2>About me</h2>
            <p>This is my blog. I made it via Webstorm. I study at Attractor School in the JS-20 group. I also really like to cook, I enjoy basketball, and sometimes I play Tekken-7.
                There may be something interesting on my blog, so subscribe to me and stay updated on the events in my life!</p>
        </div>
    );
};

export default About;