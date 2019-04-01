import React, { useState } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import KEYS from '../../config';
import { Redirect } from 'react-router-dom';

// Styles
import './login.css';

// Actions
import * as authActions from '../../actions/auth';

// Selectors
import * as authSelectors from '../../reducers/auth';
import * as userSelectors from '../../reducers/user';

// Layout
import ModalLayout from '../../layout/Modal';

// Components
import HRWrap from './HRWrap';
import SignupWithEmail from './SignUpWithEmail';

const LoginBody = ({ login, showPassword, setShowPassword, setSignup }) => {
  return (
    <React.Fragment>
      <form onSubmit={e => login(e)} method="POST">
        <HRWrap />
        <div className="Login-input-group">
          <input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div className="Login-input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="Login-input-group">
          <div>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Remember me</span>
            </label>
          </div>
          <div
            className="Login-input-link"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Show password' : 'Hide password'}
          </div>
        </div>
        <div className="Login-input-group">
          <input
            type="submit"
            className="waves-effect waves-light btn-large"
            style={{ width: '100%' }}
            value="Login"
          />
        </div>
      </form>
      <div className="Login-input-item">
        <div className="Login-input-link" style={{ fontWeight: 'bold' }}>
          Forgot password?
        </div>
      </div>
      <HRWrap noMiddle />
      <div className="Login-input-item">
        <div>Don't have an account?</div>
        <div
          className="Login-input-link"
          style={{ fontWeight: 'bold', marginLeft: 5 }}
          onClick={() => setSignup(true)}
        >
          Sign up
        </div>
      </div>
    </React.Fragment>
  );
};

const SignupBody = ({ setSignup, signupWithEmail, setSignupWithEmail }) => {
  return (
    <React.Fragment>
      <HRWrap />
      {signupWithEmail ? (
        <SignupWithEmail setSignup={setSignup} />
      ) : (
        <React.Fragment>
          <div className="Login-input-item">
            <button
              className="waves-effect waves-light btn-large"
              onClick={() => setSignupWithEmail(true)}
              style={{ width: '100%' }}
            >
              <i className="material-icons right">mail</i>
              Signup with E-mail
            </button>
          </div>
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
      )}
    </React.Fragment>
  );
};

const Login = ({
  login,
  loginWithGoogleToken,
  user,
  isOpen,
  setLoginModal,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [signup, setSignup] = useState(false);
  const [signupWithEmail, setSignupWithEmail] = useState(false);

  const googleResponse = response => {
    loginWithGoogleToken(response.accessToken);
  };

  const onFailure = response => {
    console.log(response);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  if (!isOpen) {
    return null;
  }

  return (
    <ModalLayout>
      <div className="Login">
        <div className="Login-header">
          <div className="Login-header-item" onClick={() => setLoginModal()}>
            <i className="material-icons">close</i>
          </div>
        </div>
        <div className="Login-body">
          <GoogleLogin
            clientId={KEYS.dev.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={googleResponse}
            onFailure={onFailure}
          />
          {signup ? (
            <SignupBody
              setSignup={setSignup}
              signupWithEmail={signupWithEmail}
              setSignupWithEmail={setSignupWithEmail}
            />
          ) : (
            <LoginBody
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              setSignup={setSignup}
              login={e => login(e)}
            />
          )}
        </div>
      </div>
    </ModalLayout>
  );
};

const mapStateToProps = state => {
  return {
    user: userSelectors.getUser(state),
    isOpen: authSelectors.isOpen(state),
  };
};

const actionCreators = {
  login: authActions.login,
  setLoginModal: authActions.setLoginModal,
  loginWithGoogleToken: authActions.loginWithGoogleToken,
};

export default connect(
  mapStateToProps,
  actionCreators
)(Login);
