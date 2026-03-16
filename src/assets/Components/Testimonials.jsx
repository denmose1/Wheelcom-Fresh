/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react'; 
import "../../styles/Testimonials.scss"; 

const testimonials = [
  {
    quote: "Getting my Class B license was seamless. The instructors were patient, and the night driving sessions were incredibly helpful. Highly recommend!",
    name: "Alex M.",
    role: "New Driver",
    rating: 5,
  },
  {
    quote: "I took the Advanced Refresher course, and my highway confidence increased tenfold. The training materials were top-notch and professional.",
    name: "Sarah W.",
    role: "Experienced Driver",
    rating: 5,
  },
  {
    quote: "Their Commercial training prepared me perfectly for my PSV license test. The blend of theory and practical sessions is truly effective.",
    name: "John K.",
    role: "Logistics Manager",
    rating: 4,
  },
];

const quoteVariants = {
  enter: { opacity: 0, y: 30, scale: 0.95 },
  center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, scale: 0.95, transition: { duration: 0.4 } }
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000); 
    return () => clearInterval(interval);
  }, []); 

  const handleEnrollClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="snap-section testimonials-container">
      <div className="testimonials-wrapper">
        
        <motion.h2 
          className="testimonials-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Hear From Our <span>Successful Students</span>
        </motion.h2>

        <div className="testimonial-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={quoteVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="testimonial-content"
            >
              <div className="rating-stars">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>

              <Quote className="quote-icon" />
              
              <p className="quote-text">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="author-info">
                <p className="author-name">{testimonials[currentIndex].name}</p>
                <p className="author-role">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator Dots */}
        <div className="indicator-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <motion.p className="enroll-cta">
          Ready to start your journey? 
          <button onClick={handleEnrollClick}>Enroll Today.</button>
        </motion.p>

      </div>
    </section>
  );
};

export default Testimonials;