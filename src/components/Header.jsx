import React from 'react';
import Logo from '../assets/New_York_Life_logo_PNG1.png';
import './header.css';
import { NavLink } from 'react-router-dom';

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
          <li>
            <NavLink to={'/'} className={'header--nav--link'}>
              Home
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink to={'/about'} className={'header--nav--link'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={'/services'} className={'header--nav--link'}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/testimony'}
              className={'header--nav--link'}
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to={'/blog'} className={'header--nav--link'}>
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
