import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Components/Home";

import AuthLayout from "../layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../Components/Profile";


const Router =createBrowserRouter([
{
 path: "/",
    element: <HomeLayout></HomeLayout> ,
    children:[

        {
        path:"/",
        element:<Home></Home>
      },


    ]

    },


   {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path:"/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element:<Register></Register>,
      },
       {
        path: "/auth/profile",
         element: (
          <PrivateRoute>
             <Profile></Profile>
          </PrivateRoute>
        )
        
      }
   
    ]
  }, 
       
  {
    path: "/*",
    element: <ErrorPage/> 
  }

]);

export default Router;