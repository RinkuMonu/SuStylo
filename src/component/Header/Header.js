import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Handle scroll event
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); 
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    // Toggle menu state
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
              <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to={'/'} className="navbar-brand">
          {/* <span className="logo">BLA<span className="text-warning">X</span>CUT</span> */}
          <img src='./images/stylo_Logo.png'  className='img-fluid' width={70}/>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto menu-items">
            <li className="nav-item"><Link className="nav-link" href="#">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/services'}>Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/about'}>About</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/blog'}>Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/contact'}>Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/salonpartner'}>Salon Partner</Link></li>
          </ul>
        </div>
      </div>
    </nav>
        </>
    )
}
