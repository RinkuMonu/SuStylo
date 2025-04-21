import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import axiosInstance from "../config/axiosInstance";
import { BsWallet2 } from "react-icons/bs";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [walletBalance, setwalletBalance] = useState("");
  const menuRef = useRef(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when clicking on any link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const userId = localStorage.getItem("id");
  useEffect(() => {
    const getUseProfile = async () => {
      try {
        const response = await axiosInstance.get(`/user/get/${userId}`);
        setUserName(response.data.name);
        console.log(response.data.name);
        setwalletBalance(response.data.wallet.balance)
      } catch (error) {
        console.error("Failed to fetch user profile", error);
      }
    };
    getUseProfile();
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
        ref={menuRef}
      >
        <div className="container">
          <Link to={"/"} className="navbar-brand" onClick={handleLinkClick}>
            <img
              src="/images/stylo_Logo.png"
              alt="logo"
              className="img-fluid"
              width={70}
            />
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto menu-items">
              <li className="nav-item">
                <Link className="nav-link" to={"/"} onClick={handleLinkClick}>
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle service-toggle"
                  to={"/services"}
                  id="navbarDropdown"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <ul className="dropdown-menu service-menu">
                  <li>
                    <Link
                      className="dropdown-item service-item"
                      to={"/menservices"}
                      onClick={handleLinkClick}
                    >
                      Men's Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item service-item"
                      to={"/womenservices"}
                      onClick={handleLinkClick}
                    >
                      Women's Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/about"}
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/blog"}
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/contact"}
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/salonpartner"}
                  onClick={handleLinkClick}
                >
                  Salon Partner
                </Link>
              </li>
              {isLoggedIn ? (
  <li className="nav-item dropdown">
    <a 
      className="nav-link dropdown-toggle d-flex align-items-center" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
    >
      <CgProfile className="me-2" />
      <span className="user-name">{userName}</span>
    </a>
    <ul className="dropdown-menu dropdown-menu-end">
      <li>
        <Link
          className="dropdown-item d-flex justify-content-between align-items-center"
          to="#"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            setIsLoggedIn(false);
          }}
        >
          Logout
          <TbLogout />
        </Link>
      </li>
      <li>
        <div className="dropdown-item d-flex justify-content-between align-items-center">
          <BsWallet2 />
        {walletBalance}
        </div>
      </li>
    </ul>
  </li>
) : (
  <li className="nav-item">
    <Link
      className="nav-link d-flex align-items-center"
      to="/login"
      onClick={handleLinkClick}
    >
      Login <span className="ms-1">→</span>
    </Link>
  </li>
)}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
