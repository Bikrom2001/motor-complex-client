import { createBrowserRouter } from "react-router-dom";
import Allcategory from "../components/allCategories/Allcategory";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import Home from "../components/Pages/Home/Home/Home";
import ErrorPage from "../components/Share/ErrorPage/ErrorPage";
import SignUp from "../components/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllUsers from "../Pages/AllUsers/AllUsers";
import MyOrders from "../Pages/MyOrders/MyOrders";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoutes from "./PrivateRoutes";


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
            },
            {
                path: '/allcategory/:id',
                element: <Allcategory></Allcategory>,
                loader: ({params}) => fetch(`http://localhost:5000/allcategory/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children:[
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProduct></AddProduct>
            },
           
        ]
    }
])


export default router;