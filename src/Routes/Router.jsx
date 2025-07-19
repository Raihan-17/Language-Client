import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Components/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../Components/Profile";
import FindTutor from "../Components/FindTutor";
import AddTutorial from "../Components/AddTutorial";
import MyTutorials from "../Components/MyTutorials";
import MybookedTutors from "../Components/MybookedTutors";
import Tutordetail from "../Components/Tutordetail";
import LearnFree from "../Components/LearnFree";
import HowItWorks from "../Components/HowItWorks";


const Router =createBrowserRouter([
{
 path: "/",
    element: <HomeLayout></HomeLayout> ,
    children:[

        {
        path:"/",
        element:<Home></Home>
      },
       {
        path:"/tutors",
        element:<FindTutor></FindTutor>
      },
      {
        path:"/learn-free",
        element:<LearnFree></LearnFree>
      },
      {
        path:"/how-it-works",
        element:<HowItWorks></HowItWorks>
      },
        {
        path: "/addTutorial",
         element: (
          <PrivateRoute>
             <AddTutorial></AddTutorial>
          </PrivateRoute>
        )       
      },
       {
        path: "/myTutorials",
         element: (
          <PrivateRoute>
             <MyTutorials></MyTutorials>
          </PrivateRoute>
        )       
      },
      {
        path: "/bookedTutors",
         element: (
          <PrivateRoute>
             <MybookedTutors></MybookedTutors>
          </PrivateRoute>
        )       
      },
      {
        path: "/tutors/:id",
         element: (
          <PrivateRoute>
             <Tutordetail></Tutordetail>
          </PrivateRoute>
        )       
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