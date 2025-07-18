import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.js";
import Home from "./component/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SalonPartner from "./component/Pages/SalonPartner/SalonPartner.js";
import SalonDetails from "./component/Pages/SalonDeatils/SalonDetails.js";
import BookNow from "./component/Pages/SalonDeatils/BookNow.js";
import About from "./component/Pages/About/About.js";
import Services from "./component/Pages/Services/Services.js";
import Contact from "./component/Pages/Contact/Contact.js";
import Profile from "./component/Pages/Contact/Profile.js";
import Blog from "./component/Pages/Blog/Blog.js";
import BlogsDetails from "./component/Pages/Blog/BlogDetails.js";
import TermsandCondition from "./component/Pages/Conditions/TermsandCondition.js";
import CancellationRefund from "./component/Pages/Conditions/CancellationRefund.js";
import PrivacyPolicy from "./component/Pages/Conditions/PrivacyPolicy.js";
import MenServices from "./component/Pages/ServicesType/MenServices.js";
import WomenServices from "./component/Pages/ServicesType/WomenServices.js";
import Login from "./component/Pages/login/Login.js";
import Hair from "./component/Pages/Services/Hair.js";
import SearchResults from "./component/Pages/Home/SearchResults.js";
import Main from "./component/Pages/Filters/Main.js";

const seoData = {
  "/": {
    title: "Book Salons & Beauty Services | Grow Your Business",
    description:
      "Book top-rated salons and beauty services near you. Salon owners, register now to grow your business with easy bookings and verified professionals.",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/salonpartner", element: <SalonPartner /> },
      { path: "/salondetails", element: <SalonDetails /> },
      { path: "/salondetails/:_id", element: <SalonDetails /> },
      { path: "/bookappoinment/:id", element: <BookNow /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/profile", element: <Profile /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blogdetail/:slug", element: <BlogsDetails /> },
      { path: "/menservices", element: <MenServices /> },
      { path: "/termsandcondition", element: <TermsandCondition /> },
      { path: "/cancellationrefundpolicy", element: <CancellationRefund /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/womenservices", element: <WomenServices /> },
      { path: "/profile", element: <Profile /> },
      { path: "/main", element: <Main /> },
      { path: "/hair", element: <Hair /> },
      { path: "/search-results", element: <SearchResults /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
