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
          {({ mobileMenuExpanded, setMobileMenuExpanded, isMobileWidth }) => (
            <React.Fragment>
              {isMobileWidth ? (
                <div
                  onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
                  className="NavBar--logo"
                >
                  <img src={icons.ecoHome} alt="logo-eco" />
                  <i
                    className={['material-icons']
                      .concat(mobileMenuExpanded ? 'expanded' : '')
                      .join(' ')}
                  >
                    expand_more
                  </i>
                </div>
              ) : (
                <Link to="/" className="NavBar--logo">
                  <img src={icons.ecoHome} alt="logo-eco" />
                </Link>
              )}
              <div
                className={[
                  'NavBar--menu--mobile-bg',
                  mobileMenuExpanded ? 'expanded' : '',
                ].join(' ')}
              />
              <ul
                className={[
                  'NavBar--menu',
                  mobileMenuExpanded ? 'expanded' : 'hide-on-med-and-down',
                ].join(' ')}
              >
                <li>
                  <Link
                    to="/property"
                    onClick={() =>
                      isMobileWidth &&
                      setMobileMenuExpanded(!mobileMenuExpanded)
                    }
                  >
                    Property
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    onClick={() =>
                      isMobileWidth &&
                      setMobileMenuExpanded(!mobileMenuExpanded)
                    }
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() =>
                      isMobileWidth &&
                      setMobileMenuExpanded(!mobileMenuExpanded)
                    }
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </React.Fragment>
          )}
        </Consumer>
      </div>
    </nav>
  );
};

export default NavBar;
