import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Library Management System</h3>
          <p>A C++ project using OOPs, file handling, and STL containers to manage books and users efficiently.</p>
        </div>
        <div className="project-card">
          <h3>Smart Home Automation</h3>
          <p>Simulated control system using C++ bitset and maps to automate and monitor home appliances.</p>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>This very site! Built using React.js to showcase my journey, projects, and contact info.</p>
        </div>
        <div className="project-card">
          <h3>Smart Grocerry Tracker</h3>
          <p>Smart Grocery Tracker is a digital tool or app designed to help users efficiently manage their grocery shopping and pantry inventory.</p>
        </div>
        <div className="project-card">
          <h3>PotHole Detector</h3>
          <p>Pothole Detector is a smart system designed to identify and report road surface damage, especially potholes, using technology like sensors, cameras, and AI.</p>
        </div>
        <div className="project-card">
          <h3>Crack Jack</h3>
          <p>Crack Jack is a Java-based encryption and decryption tool that goes beyond the classic Caesar cipher. It integrates advanced cryptographic algorithms like AES and RSA to secure messages with modern standards.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
