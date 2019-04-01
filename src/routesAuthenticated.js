import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router';

// Pages
import UsersEdit from './pages/Users/Edit';
import ExperiencesPayment from './pages/ExperiencesPayment';

// Layout
import MenuContentLayout from './layout/MenuContent';

// Selectors
import * as userSelectors from './reducers/user';

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
      <MenuContentLayout
        path="/book/:experienceId"
        component={ExperiencesPayment}
      />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    user: userSelectors.getUser(state),
  };
};

const actionCreator = {
  setLoginModal: authActions.setLoginModal,
};

export default connect(
  mapStateToProps,
  actionCreator
)(Routes);
