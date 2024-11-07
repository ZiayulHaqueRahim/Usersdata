import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Posts from './Components/Posts';
import Post from './Components/Post';
import PostDetails from './Components/PostDetails';
import Error from './Components/Error';


const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/users',
        element: <Users />,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/users/:id',
        element: <UserDetails />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path:'/posts',
        element: <Posts />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/posts/:id',
        element: <PostDetails />,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
