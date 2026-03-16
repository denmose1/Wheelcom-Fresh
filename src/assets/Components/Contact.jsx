/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react'; 
import WhatsAppIcon from '../Images/whatsapp.jpg'; 
import "../../styles/Contact.scss"; 

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' }); 
  };
  
  const whatsappNumber = '254713923912'; 

  return (
    <section id="contact" className="snap-section contact-container">
      <div className="contact-wrapper">
        
        <motion.h1 
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get In <span>Touch</span>
        </motion.h1>

        <div className="contact-grid">
          
          {/* Info Sidebar */}
          <motion.div
            className="info-sidebar"
            initial="hidden"
            animate="visible"
            variants={formVariants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="sidebar-heading">Reach Us Directly</h2>
            
            <motion.div className="info-item" variants={itemVariants}>
              <Phone className="icon blue" />
              <div>
                <h3>Call Us</h3>
                <p>+254 700 123 456</p> 
              </div>
            </motion.div>

            <motion.div className="info-item" variants={itemVariants}>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="whatsapp-link group">
                <img src={WhatsAppIcon} alt="WhatsApp" className="whatsapp-img" />
                <div>
                  <h3 className="group-hover:text-green-400">Chat on WhatsApp</h3>
                  <p>{`+${whatsappNumber.slice(0, 3)} ${whatsappNumber.slice(3, 6)} ${whatsappNumber.slice(6)}`}</p>
                </div>
              </a>
            </motion.div>

            <motion.div className="info-item" variants={itemVariants}>
              <Mail className="icon blue" />
              <div>
                <h3>Email Us</h3>
                <p>info@drivewheelacademy.co.ke</p> 
              </div>
            </motion.div>

            <motion.div className="info-item" variants={itemVariants}>
              <MapPin className="icon blue" />
              <div>
                <h3>Our Location</h3>
                <p>Upper Hill, Nairobi, Kenya</p>
                <span className="business-hours">Mon-Sat, 8am-5pm</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="form-card"
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <h2 className="form-heading">Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              
              <motion.div className="input-group" variants={itemVariants}>
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
              </motion.div>

              <motion.div className="input-group" variants={itemVariants}>
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="name@example.com" />
              </motion.div>

              <motion.div className="input-group" variants={itemVariants}>
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enquiry or Appointment" />
              </motion.div>

              <motion.div className="input-group" variants={itemVariants}>
                <label>Your Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required placeholder="How can we help you?" />
              </motion.div>

              <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} variants={itemVariants}>
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;