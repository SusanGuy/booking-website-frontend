import React from 'react';

// Components
import Wrapper from './Wrapper';

// Services
// Assets
import mockExperiences from '../../data/experiences';

class WrapperContainer extends React.Component {
  state = {
    experiences: [],
  };

  componentDidMount() {
    this.setState({ experiences: mockExperiences });
  }

  render() {
    let combinedProps = {
      ...this.props,
      ...this.state,
    };

    return <Wrapper {...combinedProps} />;
  }
}

export default WrapperContainer;
