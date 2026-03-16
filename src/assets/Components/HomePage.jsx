/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero'; 
import CourseOverview from './CourseOverview'; 
import Testimonials from './Testimonials'; 

// Corrected relative paths
import Navbar from '../NavBar/Navbar'; 
import Auth from '../NavBar/Auth'; 

import "../../styles/HomePage.scss";

const HomePage = () => {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="homepage-wrapper">
      <AnimatePresence mode="wait">
        {activeView === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Navbar receives the toggle function */}
            <Navbar onLoginClick={() => setActiveView("auth")} />
            
            <Hero />
            <CourseOverview />
            <Testimonials />
          </motion.div>
        ) : (
          <motion.div
            key="auth"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            {/* Auth receives the back function */}
            <Auth onBack={() => setActiveView("home")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;