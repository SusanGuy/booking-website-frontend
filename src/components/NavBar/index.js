import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// Styles
import './navbar.css';

// Icons
import icons from '../../shared/icons';

// ContextAPI
import Consumer from '../../context/ConfigProvider';

const NavBar = () => {
  const navBarMenuClasses = classnames({
    'NavBar--menu': true,
  });

  return (
    <nav className="NavBar">
      <div className="NavBar-wrapper">
        <Consumer>
          {({ mobileMenuExpanded, setMobileMenuExpanded }) => (
            <React.Fragment>
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
              <ul
                className={navBarMenuClasses.concat(
                  mobileMenuExpanded ? ' expanded' : ' hide-on-med-and-down'
                )}
              >
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
            </React.Fragment>
          )}
        </Consumer>
      </div>
    </nav>
  );
};

export default NavBar;
