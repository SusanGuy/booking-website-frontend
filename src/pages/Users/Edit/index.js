import React, { useState } from 'react';

// Style
import './edit.css';

// Layout
import ContentLayout from '../../../layout/Content';
import ThemeLayout from '../../../layout/Theme';

// Components
import Profile from './Profile';
import Photos from './Photos';
import Trust from './Trust';
import Reviews from './Reviews';
import References from './References';

const SIDEBARMENU = {
  EDITPROFILE: 'editProfile',
  PHOTOS: 'photos',
  TRUST: 'trust',
  REVIEW: 'review',
  REFERENCES: 'references',
};

const EditSideBar = ({ sideBarSelectedItem, setSideBarSelectedItem }) => {
  return (
    <div className="EditSideBar">
      <ul className="EditSideBar--list">
        <li
          onClick={() => setSideBarSelectedItem(SIDEBARMENU.EDITPROFILE)}
          className={
            SIDEBARMENU.EDITPROFILE === sideBarSelectedItem ? 'selected' : ''
          }
        >
          Edit Profile
        </li>
        <li
          onClick={() => setSideBarSelectedItem(SIDEBARMENU.PHOTOS)}
          className={
            SIDEBARMENU.PHOTOS === sideBarSelectedItem ? 'selected' : ''
          }
        >
          Photos
        </li>
        <li
          onClick={() => setSideBarSelectedItem(SIDEBARMENU.TRUST)}
          className={
            SIDEBARMENU.TRUST === sideBarSelectedItem ? 'selected' : ''
          }
        >
          Trust and Verification
        </li>
        <li
          onClick={() => setSideBarSelectedItem(SIDEBARMENU.REVIEW)}
          className={
            SIDEBARMENU.REVIEW === sideBarSelectedItem ? 'selected' : ''
          }
        >
          Reviews
        </li>
        <li
          onClick={() => setSideBarSelectedItem(SIDEBARMENU.REFERENCES)}
          className={
            SIDEBARMENU.REFERENCES === sideBarSelectedItem ? 'selected' : ''
          }
        >
          References
        </li>
      </ul>
    </div>
  );
};

const EditContent = ({ sideBarSelectedItem }) => {
  return (
    <React.Fragment>
      {sideBarSelectedItem === SIDEBARMENU.EDITPROFILE && <Profile />}
      {sideBarSelectedItem === SIDEBARMENU.PHOTOS && <Photos />}
      {sideBarSelectedItem === SIDEBARMENU.TRUST && <Trust />}
      {sideBarSelectedItem === SIDEBARMENU.REVIEW && <Reviews />}
      {sideBarSelectedItem === SIDEBARMENU.REFERENCES && <References />}
    </React.Fragment>
  );
};

const Edit = () => {
  const [sideBarSelectedItem, setSideBarSelectedItem] = useState('editProfile');

  return (
    <ContentLayout theme="white">
      <ThemeLayout theme="white">
        <div className="Edit">
          <EditSideBar
            sideBarSelectedItem={sideBarSelectedItem}
            setSideBarSelectedItem={setSideBarSelectedItem}
          />
          <EditContent sideBarSelectedItem={sideBarSelectedItem} />
        </div>
      </ThemeLayout>
    </ContentLayout>
  );
};

export default Edit;
