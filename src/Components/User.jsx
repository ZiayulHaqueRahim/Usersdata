import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
     const {id, name, email,phone} = user;

     const navigate = useNavigate();



     const userStyle = {
        border: '2px solid gray',
        padding: '15px',
        borderRadius: '25px',
        margin: '10px',
        
     }

     const handleShowDetails = () => {
        navigate(`/users/${id}`)
     }


    return (
        <div style={userStyle}>
            <h3>User Id:0000000{id}</h3>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <div className='flex flex-row justify-between'>
                <Link className='btn btn-outline btn-primary' to={`/users/${id}`}>Show details</Link>
                <button onClick={handleShowDetails} className='btn btn-primary btn-outline'>Click to see Details</button>
            </div>
        </div>
    );
};

export default User;