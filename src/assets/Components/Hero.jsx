/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import driveImage from "../Images/drive.jpg"; 
import wheelcomImage from "../Images/wheelcom.jpg"; 
import "../../styles/Hero.scss";

const images = [driveImage, wheelcomImage];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  const handleScrollToCourses = () => {
    const target = document.getElementById('courses');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section-wrapper snap-section">
      <div className="hero-compact-container">
        {/* Background Image Wrapper */}
        <div className="hero-bg-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex} 
              src={images[currentImageIndex]}
              alt="Driving school"
              className="hero-bg-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="hero-overlay"></div>
        </div>

        {/* Content Layout: Contact (Left) | Main (Right) */}
        <div className="hero-content-grid">
          
          {/* Left: Contact Info */}
          <div className="hero-contact-left">
             <div className="contact-item">
                <span>CALL NOW</span>
                <p>+254 7XX XXX XXX</p>
             </div>
             <div className="contact-item">
                <span>EMAIL US</span>
                <p>info@wheelcom.co.ke</p>
             </div>
          </div>

          {/* Right: Main Content (No gaps, pushed right) */}
          <motion.div
            className="hero-text-box-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Drive <span className="highlight">Safely.</span>
            </h1>
            <p className="hero-subtitle">Get Your License <strong>FAST</strong></p>
            <button className="hero-main-btn" onClick={handleScrollToCourses}>
              START TODAY
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;