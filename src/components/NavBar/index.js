import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './navbar.css';

// Icons
import icons from '../../shared/icons';

// ContextAPI
import ConfigContext from '../../context/ConfigProvider';
import AuthContext from '../../context/AuthProvider';

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
      <AuthContext.Consumer>
        {({ user, setUser }) => (
          <ConfigContext.Consumer>
            {({
              mobileMenuExpanded,
              setMobileMenuExpanded,
              theme,
              isMobileWidth,
              authenticated,
              setAuthenticated,
              setToken,
            }) => {
              const isWhiteTheme = theme === 'white';

              console.log('NavBar user', user);

              return (
                <div
                  className={[
                    'NavBar-wrapper',
                    isWhiteTheme ? 'inverted' : '',
                  ].join(' ')}
                >
                  <React.Fragment>
                    {isMobileWidth ? (
                      <div
                        onClick={() =>
                          setMobileMenuExpanded(!mobileMenuExpanded)
                        }
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
                        isWhiteTheme ? 'inverted' : '',
                        mobileMenuExpanded
                          ? 'expanded'
                          : 'hide-on-med-and-down',
                      ].join(' ')}
                    >
                      <NavBarLink
                        to="/host/wildlife"
                        title="Host Wildlife"
                        onClick={() =>
                          isMobileWidth &&
                          setMobileMenuExpanded(!mobileMenuExpanded)
                        }
                      />
                      <NavBarLink
                        to="/about"
                        title="About"
                        onClick={() =>
                          isMobileWidth &&
                          setMobileMenuExpanded(!mobileMenuExpanded)
                        }
                      />
                      {user ? (
                        <li>
                          <Link
                            to="/"
                            onClick={() =>
                              logout(setAuthenticated, setToken, setUser)
                            }
                          >
                            <img
                              src={
                                user.profile_pic ? user.profile_pic : icons.user
                              }
                              alt="profile-img"
                              className="NavBar--menu--profile-image"
                            />
                            <div>{`${user.first_name} ${user.last_name}`}</div>
                          </Link>
                        </li>
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
                </div>
              );
            }}
          </ConfigContext.Consumer>
        )}
      </AuthContext.Consumer>
    </nav>
  );
};

export default NavBar;
