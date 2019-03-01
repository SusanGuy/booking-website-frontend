import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './navbar.css';

// Icons
import icons from '../../shared/icons';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-wrapper">
        <Link to="/" className="NavBar--logo">
          <img src={icons.ecoHome} alt="logo-eco" />
        </Link>
        <ul id="nav-mobile" className="NavBar--menu hide-on-med-and-down">
          <li>
            <Link to="/property">Property</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
