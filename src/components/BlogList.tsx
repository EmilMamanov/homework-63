import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

interface Post {
    id: string;
    title: string;
    createdTime: string;
    body: string;
}

const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://emil-s-blog-project-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
            if (response.data) {
                const postsData: Record<string, Post> = response.data;
                const postsArray = Object.keys(postsData).map((postId) => ({
                    ...postsData[postId],
                    id: postId,
                }));
                setPosts(postsArray);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchPosts();
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        (async () => {
            await  fetchData();
        })();

        const intervalId = setInterval(() => {
            (async () => {
                await  fetchData();
            })();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);




    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`https://emil-s-blog-project-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (

        <div>
            {posts.map((post) => (
                <div className="single-post-div" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.createdTime}</p>
                    <p>{post.body.length > 30 ? `${post.body.slice(0, 30)}...` : post.body}</p>
                    <Link className="read-more" to={`/posts/${post.id}`}>Read More</Link>
                    <button className="delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
