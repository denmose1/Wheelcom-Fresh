/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Award } from 'lucide-react';
import "../../styles/CourseOverview.scss"; 

const courses = [
  {
    icon: Clock,
    title: 'Beginner Class',
    duration: '4-6 Weeks',
    features: ['Manual/Automatic', 'Theory & Practical', 'NTSA Ready'],
    price: 'Ksh 15,000'
  },
  {
    icon: Shield,
    title: 'Advanced Refresher',
    duration: '2 Weeks',
    features: ['Defensive Driving', 'Highway Tactics', 'Night Driving'],
    price: 'Ksh 8,000'
  },
  {
    icon: Award,
    title: 'Commercial Licence (PSV)',
    duration: '8 Weeks',
    features: ['Heavy Vehicle Training', 'Commercial Theory', 'Licensing Support'],
    price: 'Ksh 25,000'
  },
];

const CourseCard = ({ course, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, delay: index * 0.15 }
    },
  };
  
  const Icon = course.icon;
  
  return (
    <motion.div 
      className="overview-card"
      variants={cardVariants}
    >
      <div className="card-top">
        <Icon className="overview-icon" />
        <h3 className="card-title">{course.title}</h3>
        <p className="card-duration">{course.duration}</p>
      </div>
      
      <ul className="card-features">
        {course.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      
      <div className="card-footer">
        <span className="card-price">{course.price}</span>
        <button className="book-btn">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

const CourseOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    },
  };

  return (
    <motion.section 
      id="overview"
      className="overview-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="overview-wrapper">
        <h2 className="overview-heading">
          Our Most Popular <span>Courses</span>
        </h2>
        
        <div className="overview-grid">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
        
        <motion.p 
          className="overview-footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Need something specific? <a href="#contact">Contact us</a> for custom training packages.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CourseOverview;