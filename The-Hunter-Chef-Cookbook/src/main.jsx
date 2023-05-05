/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home
 from './pages/Home/Home/Home';
 import Blogs from './pages/blogs/Blogs';
 import Login from './pages/login/Login';
 import Register from './pages/register/Register';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import Main from './layouts/Main';
import Recipies from './pages/recipies/Recipies';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
       path: '/blogs',
       element: <Blogs></Blogs> 
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/recipies',
        element: <Recipies></Recipies>
        
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  ,)