import React, { useState, useEffect, useMemo } from 'react';

// Components
import Wrapper from './Wrapper';

// Services
// Assets
import mockExperiences from '../../data/experiences';

const WrapperContainer = props => {
  const experiences = useExperiences();

  let combinedProps = {
    ...props,
    experiences,
  };

  return <Wrapper {...combinedProps} />;
};

function useExperiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setExperiences(mockExperiences);
    }, 500);
  }, []);

  return experiences;
}

export default WrapperContainer;
