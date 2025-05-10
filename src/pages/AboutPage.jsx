import React from 'react';
import './about.css';
import Agent from '../assets/agent2.png';

function AboutPage() {
  return (
    <>
      <div className="aboutpage--container">
        <h1 className="aboutpage--header">
          Your Registered Representative & Insurance Agent
        </h1>
        <h2>Stanley UK</h2>
        <p>
          Helping clients understand their options and achieve their
          goals are what make my job so rewarding. Every client is
          unique, so together we can develop a personalized approach
          that meets today's needs and tomorrow's as well.
        </p>
        <h3>Contact Information</h3>
        <p>
          <strong>Address:</strong>
          <br />
          New York Life Insurance Company
          <br />
          285 Fulton Street, 39th Floor
          <br />
          New York, NY 10007
        </p>
        <p>
          <strong>Office:</strong> 212-261-0231
        </p>
        <p>
          <strong>Cell:</strong> 646-245-3155
        </p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:stanleyuk@ft.NewYorkLife.com">
            stanleyuk@ft.NewYorkLife.com
          </a>
        </p>
        <a href="#" className="cta-button small">
          Contact Me
        </a>
        <img src={Agent} alt="" className="aboutpage--img" />
      </div>
    </>
  );
}

export default AboutPage;
