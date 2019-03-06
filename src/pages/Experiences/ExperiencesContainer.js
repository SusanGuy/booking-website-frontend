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
    let id = this.props.match.params.id;

    let experience = mockExperiences.filter(experience => {
      return parseInt(experience.id) === parseInt(id);
    });

    this.setState({
      experience: experience.length > 0 ? experience[0] : mockExperiences[0],
    });
  }

  render() {
    return <Experiences {...this.state} />;
  }
}

export default ExperiencesContainer;
