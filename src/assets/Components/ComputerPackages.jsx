import React, { useEffect } from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FaLaptop, FaPalette } from "react-icons/fa";
// Corrected import paths based on your file tree
import complabImg from "../Images/complab.jpeg"; 
import graphicsImg from "../Images/graphic.jpeg"; // Fixed: removed the 's' to match your filename
import "../../styles/ComputerPackages.scss";

const computerData = [
  {
    id: "packages",
    title: "Computer packages",
    duration: "40 days",
    price: "KES 4,000",
    description: "Foundational computer skills, covering topics like operating systems, word processing, spreadsheets, database management...",
    image: complabImg,
    icon: <FaLaptop />
  },
  {
    id: "graphics",
    title: "graphic design",
    duration: "40 days",
    price: "KES 10,000",
    description: "TYPOGRAPHY, BRANDING, LAYOUT DESIGN, COLOUR THEORY and industry standard design software mastery.",
    image: graphicsImg,
    icon: <FaPalette />
  }
];

const ComputerPackages = ({ onBack }) => {
  useEffect(() => {
    // Scrolls to the top of the specific courses section on load
    const section = document.getElementById("courses");
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="computer-page fade-in">
      <div className="page-wrapper">
        <button className="back-btn" onClick={onBack}>
          <HiOutlineArrowNarrowLeft /> Back to Categories
        </button>

        <header className="page-header">
          <div className="top-badge">DIGITAL SKILLS</div>
          <h1>Computer Training <span>Programs</span></h1>
          <p>Enhance your digital skills with our comprehensive computer training programs designed for the modern workplace</p>
        </header>

        <div className="categories-grid">
          {computerData.map((course) => (
            <div key={course.id} className="category-card">
              <div className="image-box">
                <img src={course.image} alt={course.title} />
                <div className="floating-badge">POPULAR</div>
              </div>
              <div className="card-info">
                <h3>{course.title}</h3>
                <div className="meta-info">
                  <span>{course.duration}</span>
                  <span className="price">{course.price}</span>
                </div>
                <div className="requirements">
                  <p>{course.description}</p>
                </div>
                <button className="enroll-button">
                   {course.icon} Enroll Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerPackages;