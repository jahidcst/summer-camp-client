import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../Shared/Error";
import AllClass from "../pages/Class/AllClass";
import AllInstructors from "../pages/Instructors/AllInstructors";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/instructor",
          element: <AllInstructors></AllInstructors>
        },
        {
          path: "/class",
          element: <AllClass></AllClass>
        },
      ]
    },
  ]);

