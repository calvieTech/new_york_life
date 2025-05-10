import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--links">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Testimonial</span>
        <span>Blog</span>
      </div>
      <div className="footer--socialmedia">
        <i className="fa-brands fa-instagram fa-2xl"></i>
        <i className="fa-brands fa-x-twitter fa-2xl"></i>
        <i className="fa-brands fa-linkedin fa-2xl"></i>
        <span>calvieTech&#169;</span>
      </div>
    </footer>
  );
}

export default Footer;
