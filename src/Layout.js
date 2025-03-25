import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Loader from "./component/Loder/Loder"; 

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 5000); 
    return () => clearTimeout(timeout); 
  }, [location]);

  return (
    <>
      <Header />
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50">
          <Loader />
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
}
