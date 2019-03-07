import React, { useGlobal, useState, useEffect } from 'reactn';
import { Link } from 'react-router-dom';

// Styles
import './navbar.css';

// Icons
import icons from '../../shared/icons';

// ContextAPI
import ConfigContext from '../../context/ConfigProvider';

// Actions
import * as authActions from '../../actions/auth';

// Reducer
import reducers from '../../reducers';

const NavBarLink = ({ to, onClick, title }) => {
  return (
    <li>
      <Link to={to} onClick={onClick}>
        {title}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const dropdownMenuRef = React.createRef();
  const [state, dispatch] = useGlobal(reducers);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickIcon);
    console.log('NavBar mousedown created');
    return () => {
      console.log('NavBar mousedown cleaned up');
      document.removeEventListener('mousedown', handleClickIcon);
    };
  }, []);

  const handleClickIcon = event => {
    console.log('event.target.className', event.target.className);
    if (event.target.innerHTML === 'Log Out') {
    }

    if (
      ![
        dropdownMenuRef,
        dropdownMenuRef && dropdownMenuRef.nextSibling,
      ].includes(event.target)
    ) {
      setProfileMenu(!profileMenu);
    }
  };

  const { user } = state;

  return (
    <nav className="NavBar">
      <ConfigContext.Consumer>
        {({
          mobileMenuExpanded,
          setMobileMenuExpanded,
          theme,
          isMobileWidth,
        }) => {
          const isWhiteTheme = theme === 'white';

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
                      <Link to="#" onClick={() => setProfileMenu(!profileMenu)}>
                        <img
                          ref={dropdownMenu => (dropdownMenuRef = dropdownMenu)}
                          src={user.profile_pic ? user.profile_pic : icons.user}
                          alt="profile-img"
                          className="NavBar--menu--profile-image"
                        />
                        <div>{`${user.first_name} ${user.last_name}`}</div>
                      </Link>
                      {profileMenu && (
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
                            onClick={() => authActions.logout(dispatch)}
                            className="NavBar--profileMenu--dropdown-item"
                          >
                            Log Out
                          </div>
                        </div>
                      )}
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
    </nav>
  );
};

export default NavBar;
