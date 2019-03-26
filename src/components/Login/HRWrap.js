import React from 'react';

// Styles
import './login.css';

const HRWrap = ({ noMiddle }) => {
  return (
    <div className="Login-HR-wrap">
      <div className="Login-HR-div">
        <hr />
      </div>
      {!noMiddle && (
        <div className="Login-HR-text">
          <p style={{ margin: 0 }}>or</p>
        </div>
      )}
      <div className="Login-HR-div">
        <hr />
      </div>
    </div>
  );
};

export default HRWrap;
