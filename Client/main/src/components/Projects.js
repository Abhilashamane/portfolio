import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1. This project involves using React and Node.js to build a full-stack application.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2. This project is a responsive website built with HTML, CSS, and JavaScript.</p>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>Description of project 3. A mobile app developed using React Native.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
