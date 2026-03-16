import React, { useState } from "react";
import { 
  FaCar, FaLaptop, FaCut, FaShieldAlt, 
  FaCheckCircle 
} from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import AllDrivingCourses from "./AllDrivingCourses";
import ComputerPackages from "./ComputerPackages"; // Import the new component
import "../../styles/Courses.scss";

const Courses = () => {
  const [activeView, setActiveView] = useState("menu");

  // Toggle view logic
  if (activeView === "driving") {
    return <AllDrivingCourses onBack={() => setActiveView("menu")} />;
  }

  if (activeView === "computer") {
    return <ComputerPackages onBack={() => setActiveView("menu")} />;
  }

  return (
    <section id="courses" className="courses-section">
      <div className="courses-wrapper">
        <div className="courses-container">
          
          <div className="content-left">
            <div className="institute-badge">
              <span className="star">★</span> Kenya's #1 Training Institute
            </div>
            <h1 className="main-title">
              Master Essential Skills for <br />
              <span className="highlight">Life & Career Success</span>
            </h1>
            <p className="description">
              Select a category to explore our professional certification programs.
            </p>
          </div>

          <div className="content-right">
            <p className="click-hint">Click a category to view details</p>
            
            <div className="cards-wrapper">
              {/* Driving Card */}
              <div className="nav-card orange" onClick={() => setActiveView("driving")}>
                <div className="card-top">
                  <FaCar className="card-icon" />
                  <div className="status-badge">Available</div>
                </div>
                <h4>Driving</h4>
                <p>NTSA certification training</p>
                <div className="card-footer">
                  <span>View Courses</span>
                  <HiOutlineChevronRight className="arrow-icon" />
                </div>
              </div>

              {/* Computer Card linked to ComputerPackages */}
              <div className="nav-card blue" onClick={() => setActiveView("computer")}>
                <div className="card-top">
                  <FaLaptop className="card-icon" />
                  <div className="status-badge">Available</div>
                </div>
                <h4>Computer</h4>
                <p>Digital literacy & IT</p>
                <div className="card-footer">
                  <span>View Packages</span>
                  <HiOutlineChevronRight className="arrow-icon" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Courses;