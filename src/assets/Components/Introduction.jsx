/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react'; 
import ModelBoardImg from '../Images/modelboard.jpg'; 
import "../../styles/Introduction.scss"; 

const Introduction = () => {
  return (
    <section id="intro" className="snap-section intro-container">
      <div className="intro-wrapper">
        
        {/* Compact Text Content */}
        <div className="intro-text">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="intro-heading"
          >
            The <span className="highlight">Smart Way</span> to Learn
          </motion.h2>
          
          <motion.p className="intro-description">
            We don't just teach you to pass; we teach you to master the road. 
            Gain confidence quickly with our high-intensity modules.
          </motion.p>
          
          <div className="intro-points">
            <div className="point-item">
              <CheckCircle className="point-icon" size={18} />
              <span>NTSA Certified Curriculum.</span>
            </div>
            <div className="point-item">
              <CheckCircle className="point-icon" size={18} />
              <span>Hands-on Model Town Board.</span>
            </div>
          </div>
          
          {/* Smooth Scroll Navigation Link */}
          <a href="#courses" className="view-courses-btn">
            View All Courses <ArrowRight size={18} />
          </a>
        </div>
        
        {/* Compact Image */}
        <div className="intro-visual">
          <div className="image-frame">
             <img src={ModelBoardImg} alt="Model Town Board" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Introduction;