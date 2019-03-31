import React from 'react';

// Actions

// Components
import Home from './Home.js';

// Services
import { fetchGooglePlaces } from '../../actions/google';

class HomeContainer extends React.Component {
  state = {
    places: [],
  };

  fetchAutoComplete = input => {
    fetchGooglePlaces('autocomplete', input)
      .then(response => response.json())
      .then(({ predictions, status }) => {
        if (status === 'OK') {
          let places = [];
          predictions.map(prediction => {
            return places.push({
              name: prediction.description,
              type: prediction.types[0],
            });
          });

          this.setState({
            places,
          });
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  render() {
    return (
      <Home
        places={this.state.places}
        fetchAutoComplete={this.fetchAutoComplete}
      />
    );
  }
}

export default HomeContainer;
