import React from 'react';

// Styles
import './home.css';

// Layout
import ContentLayout from '../../layout/Content';

const Home = () => {
  return (
    <ContentLayout>
      <div className="Home">
        <h1>
          Plan your next{' '}
          <span style={{ color: 'var(--theme-main)' }}>wildlife</span>{' '}
          experience
        </h1>
        <div className="Home--search-location">
          <div className="Home--fields col s12">
            <div className="input-field" style={{ width: '48%' }}>
              <i className="material-icons">search</i>
              <input
                placeholder="Fishing at Will Clay's sunny lake"
                id="first_name"
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field with-label" style={{ width: '28%' }}>
              <div className="label">DATES</div>
              <div className="input-text">mm/dd/yyyy</div>
            </div>
            <div className="input-field with-label" style={{ width: '24%' }}>
              <div className="label">GUESTS</div>
              <div className="input-text">1 Guest</div>
            </div>
          </div>
          <div className="button-field">
            <i className="material-icons">search</i>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Home;
