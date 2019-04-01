import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';

// Styles
import './bookingDates.css';

// Layout
import ModalLayout from '../../layout/Modal';

// Selectors
import * as experiencesSelectors from '../../reducers/experiences';

// Actions
import * as experiencesActions from '../../actions/experiences';

const BookingDatesItem = ({ experienceId, availalbleDate }) => {
  return (
    <div className="BookingDatesItem">
      <div className="BookingDatesItem__date">{availalbleDate}</div>
      <div className="BookingDatesItem__content">
        <div className="BookingDatesItem__content-details">
          <div className="BookingDatesItem__content-details-hours">
            9:30 AM - 11:30 AM
          </div>
          <div className="BookingDatesItem__content-details-price">
            $52 per person
          </div>
        </div>
        <div className="BookingDatesItem__content-select-btn">
          <Link to={`/book/${experienceId}`}>
            <button className="waves-effect waves-light btn-large">
              Choose
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BookingDates = ({ experienceId, isOpen, setBookingDatesModal }) => {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [focusedInput, setFocusedInput] = useState('startDate');

  if (!isOpen) {
    return null;
  }

  return (
    <ModalLayout>
      <div className="BookingDates">
        <div className="BookingDates--header">
          <i
            onClick={() => setBookingDatesModal(false)}
            className="material-icons"
          >
            cancel
          </i>
        </div>
        <div className="BookingDates--content">
          <div className="BookingDates__dates-wrapper">
            <DateRangePicker
              startDateId="start_date"
              startDate={date.startDate}
              endDateId="end_date"
              endDate={date.endDate}
              onDatesChange={({ startDate, endDate }) => {
                setDate({
                  startDate,
                  endDate,
                });
              }}
              focusedInput={focusedInput}
              onFocusChange={focusedInput => setFocusedInput(focusedInput)}
              keepOpenOnDateSelect
            />
          </div>
          <div className="BookingDates__dates-availability">
            <div className="BookingDates__dates-availability--header">
              <div className="BookingDates__dates-availability--header-title">
                Next Available
              </div>
              <div className="BookingDates__dates-availability--header-subtitle">
                Select dates to see availability
              </div>
            </div>
            <div className="BookingDates__dates-availability--content">
              <BookingDatesItem
                experienceId={experienceId}
                availalbleDate="Mon, Apr 1"
              />
              <BookingDatesItem
                experienceId={experienceId}
                availalbleDate="Tue, Apr 2"
              />
              <BookingDatesItem
                experienceId={experienceId}
                availalbleDate="Wed, Apr 3"
              />
              <BookingDatesItem
                experienceId={experienceId}
                availalbleDate="Thu, Apr 4"
              />
              <BookingDatesItem
                experienceId={experienceId}
                availalbleDate="Fri, Apr 5"
              />
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

const mapStateToProps = state => {
  return {
    isOpen: experiencesSelectors.isOpen(state),
  };
};

const actionCreators = {
  setBookingDatesModal: experiencesActions.setBookingDatesModal,
};

export default connect(
  mapStateToProps,
  actionCreators
)(BookingDates);
