
import { useLoaderData, useNavigate } from 'react-router-dom';


const PostDetails = () => {
    const post = useLoaderData();
    const {title,body,id} = post;
  
    const navigate = useNavigate();


    const handleBack = ()=>{
        navigate(-1);
    }




    return (
        <div className='flex flex-col gap-3 text-center bg-slate-100 border-red-200 font-semibold font-mono'>
            <h3>{id}<br/>
            </h3>
            <p>Title:<br/>
                {title}</p>
            <p>Body:<br/>
            {body}</p>

           <div className='flex flex-col  justify-center items-center'>
            <button  onClick={handleBack} className='btn btn-primary max-w-40 '>
                    Go Back
                </button>
           </div>
        </div>
    );
};

export default PostDetails;