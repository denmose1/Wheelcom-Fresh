/* eslint-disable no-unused-vars */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarMenu } from '../userData/data';

const ResponsiveMenu = ({ open, setOpen, handleNavClick, onLoginClick }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu-overlay"
        >
          <ul className="mobile-nav-links">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a href={item.link} onClick={(e) => handleNavClick(e, item.link)}>
                  {item.title}
                </a>
              </li>
            ))}
            <li className="mobile-login-wrapper">
              <button 
                className="mobile-login-btn"
                onClick={() => {
                  if (typeof onLoginClick === 'function') {
                    onLoginClick();
                    setOpen(false);
                  }
                }}
              >
                Login
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;