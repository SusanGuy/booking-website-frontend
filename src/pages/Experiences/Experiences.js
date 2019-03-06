import React from 'react';

// Layout
import ContentLayout from '../../layout/Content';
import CustomBackgroundLayout from '../../layout/CustomBackground';

// Components
import ExperienceItem from './ExperienceItem';
import ExperienceFooter from './ExperienceFooter';

const Experiences = ({ match, experience }) => {
  console.log('match', match);

  return (
    <ContentLayout theme="white">
      <CustomBackgroundLayout
        theme="white"
        paddingHorizontal={48}
        paddingVertical={10}
      >
        <ExperienceItem {...experience} />
        <ExperienceFooter {...experience} />
      </CustomBackgroundLayout>
    </ContentLayout>
  );
};

export default Experiences;
