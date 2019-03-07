import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BeatLoader, BounceLoader } from 'react-spinners';

// Styles
import './navbar.css';

// Icons
import icons from '../../shared/icons';

// Actions
import * as authActions from '../../actions/auth';
import * as menuActions from '../../actions/menu';

// Selectors
import * as authSelectors from '../../reducers/auth';
import * as menuSelectors from '../../reducers/menu';
import * as themeSelectors from '../../reducers/theme';

const NavBarLink = ({ to, onClick, title }) => {
  return (
    <li>
      <Link to={to} onClick={onClick}>
        {title}
      </Link>
    </li>
  );
};

const NavBar = ({
  authLoading,
  isMobileWidth,
  mobileMenuExpanded,
  profileMenuExpanded,
  user,
  theme,
  setProfileMenuExpanded,
  setMobileMenuExpanded,
  logout,
}) => {
  const isWhiteTheme = theme === 'white';

  useEffect(() => {
    document.addEventListener('mousedown', handleClickIcon);

    return () => {
      document.removeEventListener('mousedown', handleClickIcon);
    };
  }, []);

  const handleClickIcon = event => {
    if (event.target.className === 'NavBar--profileMenu--dropdown-item') {
      return;
    }

    if (event.target.className) {
      setProfileMenuExpanded(false);
    }
  };

  const logoutUser = () => {
    logout();
    setProfileMenuExpanded(false);
  };

  return (
    <nav className="NavBar">
      <div
        className={['NavBar-wrapper', isWhiteTheme ? 'inverted' : ''].join(' ')}
      >
        <React.Fragment>
          {isMobileWidth ? (
            <div
              onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
              className="NavBar--logo"
            >
              <img src={icons.ecoHome} alt="logo-eco" />
              <i
                className={[
                  'material-icons',
                  mobileMenuExpanded ? 'expanded' : '',
                  isWhiteTheme ? 'inverted' : '',
                ].join(' ')}
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
            {user ? (
              <li>
                <Link
                  to="#"
                  onClick={() => setProfileMenuExpanded(!profileMenuExpanded)}
                >
                  {authLoading ? (
                    <BeatLoader size={15} color="var(--theme-main)" />
                  ) : (
                    <React.Fragment>
                      <img
                        src={user.profile_pic ? user.profile_pic : icons.user}
                        alt="profile-img"
                        className="NavBar--menu--profile-image"
                      />
                      <div>{`${user.first_name} ${user.last_name}`}</div>
                    </React.Fragment>
                  )}
                </Link>
                {profileMenuExpanded && (
                  <div className="NavBar--profileMenu--dropdown">
                    <div className="NavBar--profileMenu--dropdown-item">
                      Edit Profile
                    </div>
                    <div className="NavBar--profileMenu--dropdown-item">
                      Invite Friends
                    </div>
                    <div className="NavBar--profileMenu--dropdown-item">
                      Refer Hosts
                    </div>
                    <div className="NavBar--profileMenu--dropdown-item">
                      Account Settings
                    </div>
                    <div
                      onClick={() => logoutUser()}
                      className="NavBar--profileMenu--dropdown-item"
                    >
                      Log Out
                    </div>
                  </div>
                )}
              </li>
            ) : authLoading ? (
              <li>
                <BeatLoader size={15} color="var(--theme-main)" />
              </li>
            ) : (
              <NavBarLink
                to="/login"
                title="Login"
                onClick={() =>
                  isMobileWidth && setMobileMenuExpanded(!mobileMenuExpanded)
                }
              />
            )}
          </ul>
        </React.Fragment>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    authLoading: authSelectors.authLoading(state),
    isMobileWidth: authSelectors.isMobileWidth(state),
    mobileMenuExpanded: menuSelectors.mobileMenuExpanded(state),
    profileMenuExpanded: menuSelectors.profileMenuExpanded(state),
    user: authSelectors.getUser(state),
    theme: themeSelectors.getTheme(state),
  };
}

const actionCreators = {
  setProfileMenuExpanded: menuActions.setProfileMenuExpanded,
  setMobileMenuExpanded: menuActions.setMobileMenuExpanded,
  logout: authActions.logout,
};

export default connect(
  mapStateToProps,
  actionCreators
)(NavBar);
