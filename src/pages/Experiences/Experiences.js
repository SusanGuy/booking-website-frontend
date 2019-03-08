import React from 'react';

// Layout
import ContentLayout from '../../layout/Content';
import ThemeLayout from '../../layout/Theme';

// Components
import ExperienceItem from './ExperienceItem';
import ExperienceFooter from './ExperienceFooter';

const Experiences = ({ experience }) => {
  return (
    <ContentLayout theme="white">
      <ThemeLayout theme="white" paddingHorizontal={48} paddingVertical={10}>
        <ExperienceItem {...experience} />
        <ExperienceFooter {...experience} />
      </ThemeLayout>
    </ContentLayout>
  );
};

export default Experiences;
