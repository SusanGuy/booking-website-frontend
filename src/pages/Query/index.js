import React from 'react';

// Layout
import ContentLayout from '../../layout/Content';

// Styles
import './query.css';

// Components
import WrapperContainer from './WrapperContainer';

const Query = ({ match }) => {
  const query = match.params.region.split('--');
  const [location] = query;

  return (
    <ContentLayout theme="white">
      <div className="Query">
        <WrapperContainer
          title={`Explore ${location}`}
          subtitle="Book activities led by local hosts on your next trip"
        />
        <WrapperContainer endpoint="property" title="Popular experiences" />
        <WrapperContainer endpoint="property" title="Where to fish" />
      </div>
    </ContentLayout>
  );
};

export default Query;
