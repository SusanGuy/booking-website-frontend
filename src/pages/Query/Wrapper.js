import React from 'react';

import './wrapper.css';

const Wrapper = ({ title }) => {
  return (
    <div className="Wrapper">
      <div className="Wrapper--title">{title}</div>
      <div className="Wrapper--content">Content</div>
    </div>
  );
};

export default Wrapper;
