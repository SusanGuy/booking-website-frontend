import React from 'react';

// Components
import Home from './Home.js';

class HomeContainer extends React.Component {
  state = {
    places: [],
  };

  fetchAutoComplete = input => {
    fetch('http://130.74.160.59:5000/google/places/autocomplete', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ place: input }),
    })
      .then(response => response.json())
      .then(({ predictions, status }) => {
        if (status === 'OK') {
          let places = [];
          predictions.map(prediction => {
            places.push({
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
