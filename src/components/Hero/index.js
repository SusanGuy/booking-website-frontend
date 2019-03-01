import React from 'react';

// Assets
import './hero.css';
import backgrounds from '../../shared/backgrounds';

const Hero = () => {
  return (
    <div className="Hero">
      <img src={backgrounds.bg0} alt="forest" />
    </div>
  );
};

export default Hero;
