import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const data = useLoaderData();
    return (
        <div>
            <h5>Our valuable Users!!!</h5>
            <h1> Toatal users:{data.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center text-center'>
                {
                    data.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default Users;