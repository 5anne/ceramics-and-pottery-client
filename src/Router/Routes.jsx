
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import AddItem from "../Home/AddItem";
import MyList from "../Home/MyList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllItems from "../Home/AllItems";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Home/ViewDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import ShowDetails from "../Home/ShowDetails";
import Update from "../Home/Update";

const Routes = new createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all_items",
                element: <AllItems></AllItems>
            },
            {
                path: "/add_item",
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path: "/my_list",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: () => fetch('https://ceramics-and-pottery-server-8751zqvxj.vercel.app/newItems')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/view_details/:_id",
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`https://ceramics-and-pottery-server-8751zqvxj.vercel.app/items/${params._id}`)
            },
            {
                path: "/show_details/:_id",
                element: <PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ceramics-and-pottery-server-8751zqvxj.vercel.app/newItems/${params._id}`)
            },
            {
                path: "/update/:_id",
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ceramics-and-pottery-server-8751zqvxj.vercel.app/newItems/${params._id}`)
            },
        ]
    },
]);

export default Routes;