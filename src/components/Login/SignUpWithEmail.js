import React from 'react';

// Styles
import './login.css';

// Components
import HRWrap from './HRWrap';

const handleSubmit = e => {
  e.preventDefault();
  console.log('Submit form');
};

const SignupWithEmail = ({ setSignup }) => {
  return (
    <React.Fragment>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="Login-input-group">
          <input type="email" placeholder="Email address" />
        </div>
        <div className="Login-input-group">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="Login-input-group">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="Login-input-group">
          <input type="password" placeholder="Create a Password" />
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

export default SignupWithEmail;
