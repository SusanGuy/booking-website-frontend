import React from 'react';
import { connect } from 'react-redux';

// Styles
import './login.css';

// Components
import HRWrap from './HRWrap';

// Actions
import * as authActions from '../../actions/auth';
import * as menuActions from '../../actions/menu';

const handleSubmit = (e, signup, setLoginModal, setFixedBarOpened) => {
  e.preventDefault();

  const email = e.target.email.value;
  const first_name = e.target.email.first_name;
  const last_name = e.target.email.last_name;
  const password = e.target.email.password;

  signup({ email, first_name, last_name, password }).then(res => {
    setLoginModal(false);
    setFixedBarOpened({ opened: true, message: res });
  });
};

const SignupWithEmail = ({
  setSignup,
  setLoginModal,
  setFixedBarOpened,
  signup,
}) => {
  return (
    <React.Fragment>
      <form
        onSubmit={e =>
          handleSubmit(e, signup, setLoginModal, setFixedBarOpened)
        }
      >
        <div className="Login-input-group">
          <input type="email" name="email" placeholder="Email address" />
        </div>
        <div className="Login-input-group">
          <input type="text" name="first_name" placeholder="First Name" />
        </div>
        <div className="Login-input-group">
          <input type="text" name="last_name" placeholder="Last Name" />
        </div>
        <div className="Login-input-group">
          <input
            type="password"
            name="password"
            placeholder="Create a Password"
          />
        </div>
        <div className="Login-input-group">
          We’ll send you marketing promotions, special offers, inspiration, and
          policy updates via email.
        </div>
        <div className="Login-input-group">
          <input
            className="waves-effect waves-light btn-large"
            type="submit"
            style={{ width: '100%' }}
            value="Signup"
          />
        </div>
      </form>
      <HRWrap noMiddle />
      <div className="Login-input-item">
        <div>Already have an Heritage Wildlife account?</div>
        <div
          className="Login-input-link"
          style={{ fontWeight: 'bold', marginLeft: 5 }}
          onClick={() => setSignup(false)}
        >
          Log in
        </div>
      </div>
    </React.Fragment>
  );
};

const actionCreators = {
  setFixedBarOpened: menuActions.setFixedBarOpened,
  setLoginModal: authActions.setLoginModal,
  signup: authActions.signup,
};

export default connect(
  null,
  actionCreators
)(SignupWithEmail);
