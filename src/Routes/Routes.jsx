import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Sell from "../Pages/Sell/Sell";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         { path: "/register", element: <Register></Register> },
         { path: "/login", element: <Login></Login> },
         { path: "/sell", element: <Sell></Sell> },
         { path: "/services", element: <ServicesPage /> },
         { path: "/about", element: <AboutUsPage /> },
      ],
   },
]);
