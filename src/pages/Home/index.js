import React from 'react';
import { DateRangePicker } from 'react-dates';

// Styles
import './home.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Layout
import ContentLayout from '../../layout/Content';

class Home extends React.PureComponent {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: '',
    fieldFocusedInput: {
      location: false,
      date: false,
    },
  };

  inputFocus = input => {
    this.setState({
      ...this.state,
      fieldFocusedInput: {
        location: input === 'location' ? true : false,
        date: input === 'date' ? true : false,
      },
    });
  };

  render() {
    const {
      fieldFocusedInput: { location, date },
    } = this.state;

    return (
      <ContentLayout>
        <div className="Home">
          <h1>
            Plan your next{' '}
            <span style={{ color: 'var(--theme-main)' }}>wildlife</span>{' '}
            experience
          </h1>
          <div className="Home--search-location">
            <div className="Home--fields col s12">
              <div
                className={[
                  'input-field',
                  'location',
                  'with-label',
                  location ? 'focused' : '',
                ].join(' ')}
                onClick={() => this.inputFocus('location')}
              >
                <div className="label">WHERE</div>
                <input
                  placeholder="Fishing at Will Clay's sunny lake"
                  type="text"
                  className="input-text"
                />
              </div>
              <div
                className={[
                  'input-field',
                  'date',
                  'with-label',
                  date ? 'focused' : '',
                ].join(' ')}
                onClick={() => this.inputFocus('date')}
              >
                <div className="label">DATES</div>
                <DateRangePicker
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDateId="start_date" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDateId="end_date" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                />
              </div>
              <div className="input-field with-label">
                <div className="label">GUESTS</div>
                <div className="input-text">1 Guest</div>
              </div>
            </div>
            <div className="button-field">
              <i className="material-icons">search</i>
            </div>
          </div>
        </div>
      </ContentLayout>
    );
  }
}

export default Home;
