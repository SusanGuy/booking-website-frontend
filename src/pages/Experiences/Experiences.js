import React from 'react';

// Layout
import ContentLayout from '../../layout/Content';
import CustomBackgroundLayout from '../../layout/CustomBackground';

// Components
import ExperienceItem from './ExperienceItem';

const Experiences = ({ experience }) => {
  return (
    <ContentLayout theme="white">
      <CustomBackgroundLayout
        theme="white"
        paddingHorizontal={48}
        paddingVertical={10}
      >
        <ExperienceItem {...experience} />
      </CustomBackgroundLayout>
    </ContentLayout>
  );
};

export default Experiences;
