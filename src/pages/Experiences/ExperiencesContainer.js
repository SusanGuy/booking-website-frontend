import React from 'react';

// Components
import Experiences from './Experiences';

// MockData
import mockExperiences from '../../data/experiences';

class ExperiencesContainer extends React.Component {
  state = {
    experience: {},
  };

  componentDidMount() {
    this.setState({
      experience: mockExperiences[0],
    });
  }

  render() {
    return <Experiences {...this.state} />;
  }
}

export default ExperiencesContainer;
