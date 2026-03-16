import React, { useEffect } from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"; // Using a nice arrow icon
import "../../styles/AllDrivingCourses.scss";

// Images (keep your existing imports)
import motorcycleImg from "../Images/motorcycle.jpeg";
import tuktukImg from "../Images/tuktuk.jpeg";
import b1Img from "../Images/B1 Automatic.jpeg";
import c1Img from "../Images/C1-Van.jepg"; 

const drivingCategories = [
  { id: "a2", title: "A2 LIGHT MOTORCYCLE", duration: "90 days", price: "KES 5,500", requirements: ["Ride up to 50cc", "No passengers", "Min age 18"], image: motorcycleImg },
  { id: "a3", title: "A3 MOTORCYCLE TAXI", duration: "90 days", price: "KES 6,000", requirements: ["Min age 18", "1 year exp", "Max 100kg"], image: tuktukImg },
  { id: "b1", title: "B1 LIGHT AUTOMATIC", duration: "90 days", price: "KES 12,000", requirements: ["Min age 18", "Auto Gearbox", "GVW 3500kg"], image: b1Img },
  { id: "c1", title: "C1 LIGHT TRUCK / VAN", duration: "90 days", price: "KES 15,500", requirements: ["Min age 22", "2 years exp", "GVW 7500kg"], image: c1Img }
];

const AllDrivingCourses = ({ onBack }) => {
  useEffect(() => {
    // When this "page" opens, make sure we are looking at the top of the section
    const section = document.getElementById("courses");
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="all-driving-page fade-in">
      <div className="page-wrapper">
        
        {/* Back Button */}
        <button className="back-btn" onClick={onBack}>
          <HiOutlineArrowNarrowLeft /> Back to Categories
        </button>

        <header className="page-header">
          <h1>Driving License <span>Categories</span></h1>
          <p>Explore our comprehensive range of NTSA certified courses.</p>
        </header>

        <div className="categories-grid">
          {drivingCategories.map((course) => (
            <div key={course.id} className="category-card">
              <div className="image-box">
                <img src={course.image} alt={course.title} loading="lazy" />
              </div>
              <div className="card-info">
                <h3>{course.title}</h3>
                <div className="meta-info">
                  <span>{course.duration}</span>
                  <span className="price">{course.price}</span>
                </div>
                <div className="requirements">
                  <p>Minimum Requirements</p>
                  <ul>
                    {course.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="enroll-button">🎓 Enroll Now →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDrivingCourses;