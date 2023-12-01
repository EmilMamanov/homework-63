import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import PostFormPage from './Pages/PostFormPage';
import SinglePost from './Pages/SinglePost';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/new-post" element={<PostFormPage />} />
                <Route path="/posts/:id" element={<SinglePost />} />
                <Route path="/posts/:id/edit" element={<PostFormPage isEditing />} />
            </Routes>
        </Router>
    );
};

export default App;