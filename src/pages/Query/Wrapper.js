import React from 'react';

// Styles
import './wrapper.css';

// Components
import ExperienceCard from './ExperienceCard';

const Wrapper = ({ title, subtitle, experiences }) => {
  // Pick ranndomized 4 options
  const randomNumber = Math.floor(Math.random() * experiences.length - 4);
  const randomizedExperiences = experiences
    .slice(randomNumber, randomNumber + 8)
    .map(experience => experience);

  return (
    <div className="Wrapper">
      <h3 className="Wrapper--title">{title}</h3>
      {subtitle && <h4 className="Wrapper--subtitle">{subtitle}</h4>}
      <div className="Wrapper--content">
        {randomizedExperiences.map((experience, key) => {
          return <ExperienceCard key={key} {...experience} />;
        })}
      </div>
    </div>
  );
};

export default Wrapper;
