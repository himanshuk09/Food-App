import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import 'dotenv/config'
require('dotenv').config();

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />, 
    errorElement: <Error />, 
    children: [
      
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [{ 
          path: "profile",
          element: <Profile />,
        }]
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
