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
            <img src='public/images/stylo_Logo.png.png' alt="logooo" className='img-fluid' width={70} />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto menu-items">
              <li className="nav-item"><Link className="nav-link" to={'/'}>Home</Link></li>

              {/* Hoverable Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to={'/services'} id="navbarDropdown">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={'/menservices'}>Mens Services</Link></li>
                  <li><Link className="dropdown-item" to={'/womenservices'}>Womans Services</Link></li>

                </ul>
              </li>

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
