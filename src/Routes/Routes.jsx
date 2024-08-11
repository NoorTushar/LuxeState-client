import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Sell from "../Pages/Sell/Sell";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../Pages/ContactUsPage/ContacUsPage";
import BuyResidential from "../Pages/Buy/BuyResidential";
import RentResidential from "../Pages/Rent/RentResidential";
import BuyCommercial from "../Pages/Buy/BuyCommercial";
import RentCommercial from "../Pages/Rent/RentCommercial";

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
         { path: "/contact", element: <ContactUsPage /> },
         { path: "/buy-res", element: <BuyResidential /> },
         { path: "/rent-res", element: <RentResidential /> },
         { path: "/buy-comm", element: <BuyCommercial /> },
         { path: "/rent-comm", element: <RentCommercial /> },
      ],
   },
]);
