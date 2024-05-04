import {
    createBrowserRouter,
      } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";



    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout/>,
          errorElement:<Error/>,
          children:[
            {
                path:'/',
                element:<Home/>
            },
            {
              path:'/login',
              element:<Login/>
            }
          ]
        },
      ]);

      export default router;