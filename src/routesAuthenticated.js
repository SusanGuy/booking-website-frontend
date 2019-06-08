import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router';

// Pages
import UsersEdit from './pages/Users/Edit';
import ExperiencesPayment from './pages/ExperiencesPayment';

// Layout
import MenuContentLayout from './layout/MenuContent';
import LoadingLayout from './layout/Loading';

// Selectors
import * as userSelectors from './reducers/user';

// Actions
import * as authActions from './actions/auth';

const Routes = ({ isLoading, user, setLoginModal }) => {
  if (isLoading) {
    console.log('isLoading routesAuthenticated');
    return <LoadingLayout />;
  }

  if (!user) {
    console.log('Routes authenticated user: ', user);
    setLoginModal(true);

    return <Redirect to="/" />;
  }

  return (
    <Switch>
      <MenuContentLayout path="/users/edit" component={UsersEdit} />
      <MenuContentLayout
        exact
        path="/experiences/:experienceId/book"
        component={ExperiencesPayment}
      />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: userSelectors.isLoading(state),
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
