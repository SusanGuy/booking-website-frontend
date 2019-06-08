import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import queryString from 'query-string';

// Styles
import './experiencesPayment.css';

// Layout
import ContentLayout from '../../layout/Content';
import ThemeLayout from '../../layout/Theme';

// Actions
import * as experiencesActions from '../../actions/experiences';
import * as schedulesActions from '../../actions/schedules';

// Selectors
import * as experiencesSelectors from '../../reducers/experiences';

const ExperiencePaymentItem = ({ leftLabel, rightLabel, hideInput }) => {
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
        {!hideInput && (
          <div className="ExperiencePaymentItem__content--item">
            <input type="text" placeholder="text" />
          </div>
        )}
      </div>
    </div>
  );
};

const ExperiencesPayment = ({
  match,
  location,
  fetchExperience,
  experience,
}) => {
  const { experienceId } = match.params;

  const queries = queryString.parse(location.search);
  console.log('queries', queries);

  useEffect(() => {
    fetchExperience(experienceId);
  });

  const onSuccess = payment => {
    console.log(payment);
  };

  const onCancel = data => {
    console.log('The payment was cancelled!', data);
  };

  const onError = err => {
    console.log('Error!', err);
  };

  let env = 'sandbox'; // Change to "production" for live
  let currency = 'USD';
  let total = 12;
  const client = {
    sandbox:
      'AQ-Pbyg0utbkmTIWE2h9OklbDAwDBeq6ee3jJ2MnMVJVJ7qV5Kl7KoPC4mWHNN-w4hYdyfcNQ74-4GUE',
  };

  console.log('experience', experience);

  return (
    <ContentLayout theme="white">
      <ThemeLayout theme="white">
        <div className="ExperiencesPayment">
          <div className="ExperiencesPayment__details">
            <div className="ExperiencesPayment__details--header">
              REVIEW AND PAY
            </div>
            <ExperiencePaymentItem
              leftLabel="Pay with"
              rightLabel={
                <PaypalExpressBtn
                  env={env}
                  client={client}
                  currency={currency}
                  total={total}
                  onError={onError}
                  onSuccess={onSuccess}
                  onCancel={onCancel}
                />
              }
              hideInput
            />
            <ExperiencePaymentItem leftLabel="First Name" />
            <ExperiencePaymentItem leftLabel="Last Name" />
            <div className="ExperiencesPayment__details--content">
              <button className="waves-effect waves-light btn-large">
                <i className="material-icons">lock_outline</i> Confirm and pay
              </button>
            </div>
          </div>
          <div className="ExperiencesPayment__summary">
            <div className="ExperiencesPayment__summary--header">SUMMARY</div>
            <div className="ExperiencesPayment__summary-item">
              <div className="ExperiencesPayment__summary-item-title">
                {experience.title}
              </div>
              <div className="ExperiencesPayment__summary-item-location">
                {experience.location}
              </div>
              <div className="ExperiencesPayment__summary-item-duration">
                {experience.duration}
              </div>
            </div>
            <div className="ExperiencesPayment__summary-item">
              <div className="ExperiencesPayment__summary-item-title">
                {experience.price}
              </div>
              <div className="ExperiencesPayment__summary-item-location">
                {experience.rating}
              </div>
              <div className="ExperiencesPayment__summary-item-duration">
                {experience.reviews}
              </div>
            </div>
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

const actionCreators = {
  fetchExperience: experiencesActions.fetchExperience,
  fetchSchedules: schedulesActions.fetchSchedules,
};

export default connect(
  mapStateToProps,
  actionCreators
)(ExperiencesPayment);
