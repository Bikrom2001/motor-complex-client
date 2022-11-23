import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Pages/Home/Home/Home";
import ErrorPage from "../components/Share/ErrorPage/ErrorPage";
import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])


export default router;