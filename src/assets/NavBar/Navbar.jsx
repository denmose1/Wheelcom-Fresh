import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavbarMenu } from '../userData/data';
import { FaCarSide } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Added Close icon
import ResponsiveMenu from './ResponsiveMenu';
import "./Navbar.scss";

const Navbar = ({ onLoginClick }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    
    // 1. Extract the ID: "/About" -> "about", "/" -> ""
    const targetId = link.replace(/[#/]/g, "").toLowerCase();

    // 2. Safety Check: Handle the Root/Home case
    if (targetId === "" || targetId === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setOpen(false);
      return;
    }

    // 3. Navigation Logic
    // If we are currently on the Auth view or a different route, 
    // we go to "/" first, then scroll.
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      // Already on Home, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with ID #${targetId} not found.`);
      }
    }
    
    setOpen(false); // Close mobile menu if open
  };

  return ( 
    <>
      <nav className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}> 
        <div className='nav-container'>
          {/* Logo Section */}
          <div className='nav-logo' onClick={(e) => handleNavClick(e, "/")}> 
            <div className="logo-wrapper"><FaCarSide className="logo-icon" /></div>
            <div className="brand-text">
              <span className='brand-wheel'>Wheelcom</span>
              <span className='brand-driving'>Driving</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='nav-menu-desktop'>
            <ul className='nav-links'> 
              {NavbarMenu.map((item) => (
                <li key={item.id}> 
                  <a href={item.link} onClick={(e) => handleNavClick(e, item.link)} className='nav-link-item'>
                    {item.title}
                  </a> 
                </li>
              ))}
            </ul>
          </div>

          {/* Actions Section */}
          <div className='nav-actions'>
            <button className='search-btn'><CiSearch /></button>
            <button className='login-btn' onClick={onLoginClick}>Login</button>
            
            {/* Mobile Toggle Icon - Switches between Menu and Close */}
            <div className='mobile-toggle' onClick={() => setOpen(!open)}>
              {open ? <IoMdClose /> : <IoMdMenu />}  
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <ResponsiveMenu 
        open={open} 
        setOpen={setOpen} 
        handleNavClick={handleNavClick} 
        onLoginClick={onLoginClick} 
      />
    </>
  );
};

export default Navbar;