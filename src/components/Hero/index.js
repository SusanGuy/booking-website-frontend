import React from 'react';

// Styles
import './hero.css';

// Assets
import backgrounds from '../../shared/backgrounds';

const Hero = () => {
  return (
    <div
      className="Hero"
      style={{ backgroundImage: `url(${backgrounds.bg0})` }}
    />
  );
};

export default Hero;
