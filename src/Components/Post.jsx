import React from 'react';
import { Link, useNavigate } from 'react-router-dom';






const Post = ({post}) => {

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/posts/${id}`)
    }



    const{title,id} = post;
    return (
        <div className='text-center font-bold'>
            <p>{id}</p>
            <p>{title}</p>
            <div className='flex flex-row justify-evenly'>
                <Link to={`/posts/${id}`}><button className='btn btn-primary btn-outline'>Show Details</button></Link>
                <button onClick={handleShowDetails} className='btn btn-outline'>Show me detailed post...</button>
            </div>
        </div>
    );
};

export default Post;