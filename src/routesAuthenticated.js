import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router';

// Pages
import UsersEdit from './pages/Users/Edit';

// Layout
import MenuContentLayout from './layout/MenuContent';

// Selectors
import * as authSelectors from './reducers/auth';

// Actions
import * as authActions from './actions/auth';

const Routes = ({ user, setLoginModal }) => {
  if (!user) {
    setLoginModal(true);

    return <Redirect to="/" />;
  }

  return (
    <Switch>
      <MenuContentLayout path="/users/edit" component={UsersEdit} />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    user: authSelectors.getUser(state),
  };
};

const actionCreator = {
  setLoginModal: authActions.setLoginModal,
};

export default connect(
  mapStateToProps,
  actionCreator
)(Routes);
