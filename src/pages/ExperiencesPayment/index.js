import React from 'react';
import { connect } from 'react-redux';

// Styles
import './experiencesPayment.css';

// Layout
import ContentLayout from '../../layout/Content';
import ThemeLayout from '../../layout/Theme';

// Selectors
import * as experiencesSelectors from '../../reducers/experiences';

const ExperiencePaymentItem = (leftLabel, rightLabel) => {
  return (
    <div className="ExperiencePaymentItem">
      <div className="ExperiencePaymentItem__title" />
      <div className="ExperiencePaymentItem__content">
        <div className="ExperiencePaymentItem__content-label">
          <div className="ExperiencePaymentItem__content--left">
            {leftLabel}
          </div>
          <div className="ExperiencePaymentItem__content--right">
            {rightLabel}
          </div>
        </div>
        <div className="ExperiencePaymentItem__content--item">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

const ExperiencesPayment = ({ experience }) => {
  return (
    <ContentLayout theme="white">
      <ThemeLayout theme="white">
        <div className="ExperiencesPayment">
          <div className="ExperiencesPayment__details">
            <div className="ExperiencesPayment__details--header">
              REVIEW AND PAY
            </div>
            <div className="ExperiencesPayment__details--content">
              <button className="waves-effect waves-light btn-large">
                <i className="material-icons">lock_outline</i> Confirm and pay
              </button>
            </div>
          </div>
          <div className="ExperiencesPayment__summary">
            <div className="ExperiencesPayment__summary--header">SUMMARY</div>
          </div>
        </div>
      </ThemeLayout>
    </ContentLayout>
  );
};

const mapStateToProps = state => {
  return {
    experience: experiencesSelectors.getExperience(state),
  };
};

export default connect(mapStateToProps)(ExperiencesPayment);
