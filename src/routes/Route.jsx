import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Blog from "../pages/Blog/Blog";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addToys',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://b7a11-toy-marketplace-server-side-sohelranalive.vercel.app/allToys')
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-sohelranalive.vercel.app/toyDetails/${params.id}`)
            }
        ]
    }
])

export default router;