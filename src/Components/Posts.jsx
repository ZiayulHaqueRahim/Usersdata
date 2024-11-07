import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();
    
    return (
        <div>
            <h3>Posts:{posts.length}</h3>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;