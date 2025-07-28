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
      </div>
    </section>
  );
}

export default Projects;
