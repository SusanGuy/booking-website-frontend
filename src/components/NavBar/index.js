import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

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

// Components
import DropdownMenuItem from './DropdownMenuItem';

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
  user,
  theme,
  setMobileMenuExpanded,
  logout,
}) => {
  const isWhiteTheme = theme === 'white';
  const [profileMenuExpanded, setProfileMenuExpanded] = useState(false);
  const [wildLifeExpanded, setWildLifeExpanded] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickIcon);

    return () => {
      document.removeEventListener('mousedown', handleClickIcon);
    };
  }, []);

  const handleClickIcon = event => {
    console.log('event.target.className', event.target.className);
    if (
      ['NavBar--profileMenu--dropdown-item', 'DropdownMenuItem'].includes(
        event.target.className
      )
    ) {
      return;
    }

    if (event.target.className) {
      setProfileMenuExpanded(false);
      setWildLifeExpanded(false);
    }
  };

  const handleLogoClick = () => {
    setMobileMenuExpanded(!mobileMenuExpanded);
  };

  const handleWildLifeMenu = () => {
    setWildLifeExpanded(!wildLifeExpanded);
    setProfileMenuExpanded(false);
    isMobileWidth && setMobileMenuExpanded(false);
  };

  const handleAboutMenu = () => {
    isMobileWidth && setMobileMenuExpanded(false);
  };

  const handleProfileMenu = () => {
    setProfileMenuExpanded(!profileMenuExpanded);
    setWildLifeExpanded(false);
    isMobileWidth && setMobileMenuExpanded(false);
  };

  const handleLogin = () => {
    isMobileWidth && setMobileMenuExpanded(!mobileMenuExpanded);
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
            <div onClick={handleLogoClick} className="NavBar--logo">
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
            <li>
              <div className="NavBar--menu-link" onClick={handleWildLifeMenu}>
                <div>Host Wildlife</div>
              </div>
              {wildLifeExpanded ? (
                <div className="NavBar--profileMenu--dropdown">
                  <DropdownMenuItem title="PROPERTIES" iconUrl={icons.field}>
                    <Link to="#">List your land</Link>
                    <div>Earn up to $6000 a month hosting in University</div>
                    <Link to="#">Learn about hosting land</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    title="EXPERIENCES"
                    iconUrl={icons.mountainPeak}
                  >
                    <Link to="#">Host an experience</Link>
                    <div>Earn money leading poeple on activities you love</div>
                  </DropdownMenuItem>
                </div>
              ) : (
                <React.Fragment />
              )}
            </li>

            <NavBarLink to="/about" title="About" onClick={handleAboutMenu} />
            {user ? (
              <li>
                <div className="NavBar--menu-link" onClick={handleProfileMenu}>
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
                </div>
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
              <NavBarLink to="/login" title="Login" onClick={handleLogin} />
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
    user: authSelectors.getUser(state),
    theme: themeSelectors.getTheme(state),
  };
}

const actionCreators = {
  setMobileMenuExpanded: menuActions.setMobileMenuExpanded,
  logout: authActions.logout,
};

export default connect(
  mapStateToProps,
  actionCreators
)(NavBar);
