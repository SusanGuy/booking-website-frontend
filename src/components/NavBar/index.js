import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './navbar.css';

// Icons
import icons from '../../shared/icons';

// ContextAPI
import Consumer from '../../context/ConfigProvider';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-wrapper">
        <Consumer>
          {({ mobileMenuExpanded, setMobileMenuExpanded }) => (
            <div
              onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
              className="NavBar--logo"
            >
              <img src={icons.ecoHome} alt="logo-eco" />
              <i className="material-icons">
                {mobileMenuExpanded ? 'expand_less' : 'expand_more'}
              </i>
            </div>
          )}
        </Consumer>
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
        {/* <ul id="nav-mobile" className="NavBar--menu hide-on-med-and-up">
          <li>
            <Link to="/property">Property</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default NavBar;
