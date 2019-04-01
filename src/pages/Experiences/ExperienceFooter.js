import React from 'react';
import { connect } from 'react-redux';

// Styles
import './experienceFooter.css';

// Assets
import icons from '../../shared/icons';

// Actions
import * as experiencesActions from '../../actions/experiences';

const ExperienceFooter = ({
  userProfilePic,
  category,
  rating,
  reviews,
  setBookingDatesModal,
}) => {
  return (
    <div className="ExperienceFooter">
      <div className="ExperienceFooter--profile">
        <img
          src={userProfilePic ? userProfilePic : icons.user}
          alt="profile-pic"
        />
        <div className="ExperienceFooter--description-reviews">
          <div className="ExperienceFooter--description-reviews-rate">
            {rating}
          </div>
          <i className="material-icons" style={{ height: 16 }}>
            star
          </i>
          <i className="material-icons" style={{ height: 16 }}>
            star
          </i>
          <i className="material-icons" style={{ height: 16 }}>
            star
          </i>
          <i className="material-icons" style={{ height: 16 }}>
            star
          </i>
          <i className="material-icons" style={{ height: 16 }}>
            star
          </i>
          <div className="ExperienceFooter--description-reviews-number">
            {`(${reviews} reviews)`}
          </div>
        </div>
      </div>
      <div className="ExperienceFooter--callToAction">
        <div className="ExperienceFooter--callToAction--price">
          $63 per person
        </div>
        <div
          onClick={() => setBookingDatesModal(true)}
          className="ExperienceFooter--callToAction--button waves-effect waves-light btn-large red"
        >
          See Dates
        </div>
      </div>
    </div>
  );
};

const actionCreators = {
  setBookingDatesModal: experiencesActions.setBookingDatesModal,
};

export default connect(
  null,
  actionCreators
)(ExperienceFooter);
