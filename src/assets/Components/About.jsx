/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import TeamImage from '../Images/drive.jpg';
import "../../styles/About.scss"; // Import your new style sheet

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="snap-section about-container">
      <div className="about-wrapper">
        
        {/* Animated Title */}
        <motion.h1 
          className="about-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span>Driving the Future, Safely.</span>
        </motion.h1>

        <motion.div
          className="about-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="about-grid">
            
            {/* Left Column: Mission & Values */}
            <motion.div 
              className="about-text-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="section-heading" variants={itemVariants}>
                Our Mission
              </motion.h2>

              <motion.p className="mission-text" variants={itemVariants}>
                DriveWheel Academy is dedicated to fostering a new generation of <strong>responsible and confident drivers</strong> in Kenya. We believe driving is a privilege that requires rigorous training, defensive strategies, and a deep respect for road safety.
              </motion.p>

              <motion.h2 className="section-heading" variants={itemVariants}>
                Why Choose Us?
              </motion.h2>
              
              <motion.ul className="values-list" variants={containerVariants}>
                <motion.li className="value-item" variants={itemVariants}>
                  <span className="icon">🚀</span>
                  <p><strong>Expert Instruction:</strong> Certified trainers with years of professional road experience.</p>
                </motion.li>
                <motion.li className="value-item" variants={itemVariants}>
                  <span className="icon">🚗</span>
                  <p><strong>Modern Fleet:</strong> Learn in reliable, well-maintained vehicles equipped with the latest safety features.</p>
                </motion.li>
                <motion.li className="value-item" variants={itemVariants}>
                  <span className="icon">⏰</span>
                  <p><strong>Flexible Learning:</strong> Customized schedules to fit your school, work, or family commitments.</p>
                </motion.li>
                <motion.li className="value-item" variants={itemVariants}>
                  <span className="icon">🛡️</span>
                  <p><strong>Defensive Driving:</strong> We teach lifetime road safety and risk management, not just the test.</p>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Right Column: Animated Image */}
            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.img
                src={TeamImage}
                alt="DriveWheel Academy Team"
                className="about-img"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          className="about-footer-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Your journey on the road starts with the right foundation.
        </motion.p>
      </div>
    </section>
  );
};

export default About;