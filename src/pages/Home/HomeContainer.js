import React, { useState } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchGooglePlaces } from '../../actions/google';

// Components
import Home from './Home.js';

const HomeContainer = ({ fetchGooglePlaces }) => {
  const [places, setPlaces] = useState([]);

  const fetchAutoComplete = input => {
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

          setPlaces(places);
        }
      });
  };

  return <Home places={places} fetchAutoComplete={fetchAutoComplete} />;
};

const actionCreators = {
  fetchGooglePlaces,
};

export default connect(
  null,
  actionCreators
)(HomeContainer);
