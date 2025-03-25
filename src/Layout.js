import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

export default function Layout() {
  const { pathname } = useLocation(); // Detect route changes

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on route change
  }, [pathname]); // Runs whenever the route changes

  return (
    <>
      <Header />

      <div className="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50">
        {/* This seems like a modal overlay; ensure it's properly handled */}
      </div>

      <Outlet />
      <Footer />
    </>
  );
}
