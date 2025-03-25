import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.js';
import Home from "./component/Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SalonPartner from './component/Pages/SalonPartner/SalonPartner.js';
import SalonDetails from './component/Pages/SalonDeatils/SalonDetails.js';
import BookNow from './component/Pages/SalonDeatils/BookNow.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> }, 
      { path: "/salonpartner", element: <SalonPartner /> }, 
      { path: "/salondetails/:id", element: <SalonDetails /> },
      { path: "/bookappoinment", element: <BookNow /> }, 
    ],
  },
]);

function App() {



  return <RouterProvider router={router} />;
}

export default App;
