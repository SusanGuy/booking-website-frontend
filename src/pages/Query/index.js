import React from 'react';

// Layout
import ContentLayout from '../../layout/Content';

// Styles
import './query.css';

// Components
import Wrapper from './Wrapper';

const Query = () => {
  return (
    <ContentLayout theme="white">
      <div className="Query">
        <Wrapper title="Explore" />
        <Wrapper title="Popular Experiences" />
        <Wrapper title="Where to stay" />
      </div>
    </ContentLayout>
  );
};

export default Query;
