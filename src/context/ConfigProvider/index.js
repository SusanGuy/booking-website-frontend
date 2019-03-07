import React, { createContext } from 'react';

// ContextAPI
const ConfigContext = createContext();

class ConfigProvider extends React.Component {
  state = {
    mobileMenuExpanded: false,
    theme: 'main',
    profileMenu: false,
  };

  setMobileMenuExpanded = mobileMenuExpanded => {
    this.setState({
      mobileMenuExpanded,
    });
  };
  setTheme = theme => {
    this.setState({
      theme,
    });
  };
  toggleProfileMenu = profileMenu => {
    this.setState({
      profileMenu,
    });
  };

  render() {
    const {
      state: { mobileMenuExpanded, theme, profileMenu },
      setTheme,
      setMobileMenuExpanded,
      toggleProfileMenu,
    } = this;

    const { children } = this.props;

    // Validate is screen width is less than 992px
    const isMobileWidth = window.innerWidth <= 992;

    return (
      <ConfigContext.Provider
        value={{
          theme,
          setTheme,
          mobileMenuExpanded,
          setMobileMenuExpanded,
          isMobileWidth,
          toggleProfileMenu,
          profileMenu,
        }}
      >
        {children}
      </ConfigContext.Provider>
    );
  }
}

export { ConfigProvider };

export default ConfigContext;
