import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Categories/Categories";
import Blogs from "../pages/blogs/Blogs";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                 path: '/',
            element: <Home></Home>
        },
        {
            path: '/categories/:id',
            element: <Categories></Categories>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
           
        ]

    }
]);

export default router;