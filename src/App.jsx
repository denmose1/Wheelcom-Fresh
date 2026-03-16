import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/NavBar/Navbar'; 
import HomePage from './assets/Components/HomePage'; 
import About from './assets/Components/About'; 
import Contact from './assets/Components/Contact'; 
import "./index.scss";
import Courses from './assets/Components/Courses';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />

      <main className="snap-container">
        {/* Block 1: Entire Home Flow */}
        <section id="home-page-container" className="snap-section-long">
          <HomePage />
        </section>

        <section id="courses" className="snap-section">
          <Courses />
        </section>
          
        

        {/* Block 2: Snap to About */}
        <section id="about" className="snap-section">
          <About />
        </section>

        {/* Block 3: Snap to Contact */}
        <section id="contact" className="snap-section">
          <Contact />
        </section>
      </main>

      {/* Routes preserved for deep linking */}
      <Routes>
        <Route path="/" element={null} /> 
        <Route path="/about" element={null} />
        <Route path= "Courses" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
    </div>
  );
}

export default App;