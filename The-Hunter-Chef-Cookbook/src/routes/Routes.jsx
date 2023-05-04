import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Categories/Categories";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                 path: '/home',
            element: <Home></Home>
        },
        {
            path: '/categories/:id',
            element: <Categories></Categories>
        }
           
        ]

    }
]);

export default router;