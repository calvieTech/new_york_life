import React from 'react';
import Agent from '../assets/agent2.png';
import './about.css';

function About() {
  return (
    <div className="about--container">
      <div className="about--left">
        <img src={Agent} alt="" />
      </div>
      <div className="about--right">
        <h4>About the Agent</h4>
        <p>Name, License Information, and Experience</p>
        <p>Personal Mission Statement</p>
        <p>Affiliations with New York Life</p>
        <p>Small quote / testimonial</p>
        <p>Read full bio</p>
      </div>
    </div>
  );
}

export default About;
