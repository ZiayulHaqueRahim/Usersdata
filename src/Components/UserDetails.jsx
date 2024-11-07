import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
     const {name,phone,email,website} = user;
    return (
        <div className=" flex flex-col gap-3 text-center text-gray-600 bg-sky-300 font-bold p-10 border-red-300 rounded-xl text-3xl">
                <h3>Details about user!</h3>
                <p>Name: {name}</p>
                <p> {phone}</p>
                <p> {email}</p>
                <p> {website}</p>
        </div>
    );
};

export default UserDetails;