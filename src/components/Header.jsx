import React from 'react';
import Logo from '../assets/New_York_Life_logo_PNG1.png';
import './header.css';

function Header() {
  return (
    <div className="header--container">
      <div className="header--logo">
        <a href="./">
          <img src={Logo} alt="" />
        </a>
      </div>
      <nav className="header--nav">
        <ul className="header--nav--list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Testimonial</li>
          <li>Blog</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
