import React, { useEffect, useState } from 'react';

// Components
import BookingDates from '../../components/BookingDates';

// Pages
import Experiences from './Experiences';

// MockData
import mockExperiences from '../../data/experiences';

const ExperiencesContainer = ({ match }) => {
  const [experienceId, setExperienceId] = useState(null);
  const [experience, setExperience] = useState({});

  useEffect(() => {
    let id = match.params.id;

    let experience = mockExperiences.filter(experience => {
      return parseInt(experience.id) === parseInt(id);
    });

    setExperienceId(id);
    setExperience(experience.length > 0 ? experience[0] : mockExperiences[0]);
  });

  return (
    <React.Fragment>
      <Experiences experience={experience} />
      <BookingDates experienceId={experienceId} />
    </React.Fragment>
  );
};

export default ExperiencesContainer;
