import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './stepBar.css';

// Icons
import icons from '../../shared/icons';

const StepBar = () => {
  return (
    <nav className="StepBar">
      <div className="StepBar-wrapper">
        <div className="StepBar-header">
          <Link to="/" className="StepBar--logo">
            <img src={icons.ecoHome} alt="logo-eco" />
          </Link>
          <div className="StepBar--title">Step 1: Start with the basics</div>
        </div>
        <div className="StepBar-progressBar">
          <div className="StepBar-progressBar--bar" style={{ width: '15%' }} />
        </div>
      </div>
    </nav>
  );
};

export default StepBar;
