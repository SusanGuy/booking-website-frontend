import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './navbar.css';

// Icons
import icons from '../../shared/icons';

// ContextAPI
import Consumer from '../../context/ConfigProvider';

const NavBarLink = ({ to, onClick, title }) => {
  return (
    <li>
      <Link to={to} onClick={onClick}>
        {title}
      </Link>
    </li>
  );
};

const logout = ({ setAuthenticated, setToken, setUser }) => {
  setAuthenticated(false);
  setToken('');
  setUser(null);
};

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-wrapper">
        <Consumer>
          {({
            mobileMenuExpanded,
            setMobileMenuExpanded,
            isMobileWidth,
            authenticated,
            setAuthenticated,
            setToken,
            setUser,
          }) => (
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
                <NavBarLink
                  to="/host/wildlife"
                  title="Host Wildlife"
                  onClick={() =>
                    isMobileWidth && setMobileMenuExpanded(!mobileMenuExpanded)
                  }
                />
                <NavBarLink
                  to="/about"
                  title="About"
                  onClick={() =>
                    isMobileWidth && setMobileMenuExpanded(!mobileMenuExpanded)
                  }
                />
                {authenticated ? (
                  <Link
                    to="/"
                    onClick={() => logout(setAuthenticated, setToken, setUser)}
                  >
                    Logout
                  </Link>
                ) : (
                  <NavBarLink
                    to="/login"
                    title="Login"
                    onClick={() =>
                      isMobileWidth &&
                      setMobileMenuExpanded(!mobileMenuExpanded)
                    }
                  />
                )}
              </ul>
            </React.Fragment>
          )}
        </Consumer>
      </div>
    </nav>
  );
};

export default NavBar;
