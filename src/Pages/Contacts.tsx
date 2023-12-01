import React from 'react';
import { Link } from 'react-router-dom';

const Contacts: React.FC = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/new-post">Add</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
            <h2>Contact</h2>
            <p>Hi! My name is Emil and it is my blog. if you want to contact me, just send me a message. Here's my email: emil.mamanov97@gmail.com</p>
        </div>
    );
};

export default Contacts;