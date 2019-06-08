import React from 'react';

// Styles
import './loading.css';

// Assets
import loadingSvg from '../../assets/icon/loadingio/Flickr-1s-200px.svg';

const LoadingLayout = () => {
  return (
    <div className="Loading">
      <img src={loadingSvg} alt="loading-spinner" />
    </div>
  );
};

export default LoadingLayout;
