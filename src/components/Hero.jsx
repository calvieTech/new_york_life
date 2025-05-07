import React from 'react';
import './hero.css';
import Agent from '../assets/agent2.png';

function Hero() {
  return (
    <div className="hero--container">
      <div className="banner--container">
        <div className="banner--left">
          <h1>Secure Your Future With Trusted Life Insurance</h1>
          <h4>
            Serving individuals, families, and businesses across New
            York
          </h4>
          <button>Schedule a free consultation</button>
        </div>
        <div className="banner--right">
          <img src={Agent} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
