import React from 'react';

// Layout
import ContentLayout from '../../layout/Content';

const Query = ({ match }) => {
  console.log('match', match);
  return (
    <ContentLayout>
      <div>QUERY</div>
    </ContentLayout>
  );
};

export default Query;
