import React from 'react';
import { SingleDatePicker, DateRangePicker } from 'react-dates';

// Styles
import './home.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Layout
import ContentLayout from '../../layout/Content';

// ContextAPI
import Consumer from '../../context/ConfigProvider';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      startDateIsFocused: false,
      endDateIsFocused: false,
      fieldFocusedInput: {
        location: false,
        date: false,
        guests: false,
      },
    };

    this.locationRef = React.createRef();
    this.dateRef = React.createRef();
    this.guestsRef = React.createRef();
    this.locationInputRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickIcon);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickIcon);
  }

  handleClickIcon = event => {
    if (this.locationRef !== event.target) {
      this.setState({
        ...this.state,
        fieldFocusedInput: {
          location: false,
        },
      });
    } else if (this.datesRef !== event.target) {
      this.setState({
        ...this.state,
        fieldFocusedInput: {
          date: false,
        },
      });
    } else if (this.guestsRef !== event.target) {
      this.setState({
        ...this.state,
        fieldFocusedInput: {
          guests: false,
        },
      });
    }
  };

  inputFocus = input => {
    this.setState({
      ...this.state,
      fieldFocusedInput: {
        location: input === 'location' ? true : false,
        date: input === 'date' ? true : false,
        guests: input === 'guests' ? true : false,
      },
    });

    if (input === 'location') {
      this.locationInputRef.focus();
    } else if (input === 'date') {
      this.setState({ focusedInput: 'startDate' });
    }
  };

  render() {
    const {
      fieldFocusedInput: { location, date, guests },
    } = this.state;

    return (
      <ContentLayout>
        <div className="Home">
          <h1>
            Plan your next{' '}
            <span style={{ color: 'var(--theme-main)' }}>wildlife</span>{' '}
            experience
          </h1>
          <Consumer>
            {({ isMobileWidth }) => (
              <div className="Home--search-location">
                <div className="Home--fields col s12">
                  <div
                    ref={input => (this.locationRef = input)}
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
                      ref={input => (this.locationInputRef = input)}
                      placeholder="Fishing at Will Clay's sunny lake"
                      type="text"
                      className="input-text"
                    />
                  </div>
                  <div
                    ref={dateRef => (this.dateRef = dateRef)}
                    className={[
                      'input-field',
                      'date',
                      'with-label',
                      date ? 'focused' : '',
                    ].join(' ')}
                    onClick={() => this.inputFocus('date')}
                  >
                    {isMobileWidth ? (
                      <div className="Home--SingleDatePicker">
                        <div className="Home--DatePicker">
                          <div className="label">CHECK IN</div>
                          <SingleDatePicker
                            date={this.state.startDate} // momentPropTypes.momentObj or null,
                            placeholder="mm/dd/yyyy"
                            id="start_date" // PropTypes.string.isRequired,
                            onDateChange={date =>
                              this.setState({ startDate: date })
                            } // PropTypes.func.isRequired,
                            numberOfMonths={1}
                            onFocusChange={({ focused }) =>
                              this.setState({ startDateIsFocused: focused })
                            } // PropTypes.func.isRequired,
                            focused={this.state.startDateIsFocused}
                            withPortal={true}
                            noBorder
                          />
                        </div>
                        <div className="Home--DatePicker">
                          <div className="label">CHECK OUT</div>
                          <SingleDatePicker
                            date={this.state.startDate} // momentPropTypes.momentObj or null,
                            placeholder="mm/dd/yyyy"
                            id="end_date" // PropTypes.string.isRequired,
                            onDateChange={date =>
                              this.setState({ endDate: date })
                            } // PropTypes.func.isRequired,
                            numberOfMonths={1}
                            onFocusChange={({ focused }) =>
                              this.setState({ endDateIsFocused: focused })
                            } // PropTypes.func.isRequired,
                            focused={this.state.endDateIsFocused}
                            withPortal={true}
                            noBorder
                          />
                        </div>
                      </div>
                    ) : (
                      <React.Fragment>
                        <div className="label">DATES</div>
                        <DateRangePicker
                          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                          startDatePlaceholderText="Check In"
                          startDateId="start_date" // PropTypes.string.isRequired,
                          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                          endDatePlaceholderText="Check Out"
                          endDateId="end_date" // PropTypes.string.isRequired,
                          onDatesChange={({ startDate, endDate }) =>
                            this.setState({ startDate, endDate })
                          } // PropTypes.func.isRequired,
                          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                          onFocusChange={focusedInput =>
                            this.setState({ focusedInput })
                          } // PropTypes.func.isRequired,
                        />
                      </React.Fragment>
                    )}
                  </div>
                  <div
                    ref={guestsRef => (this.guestsRef = guestsRef)}
                    className={[
                      'input-field',
                      'guests',
                      'with-label',
                      guests ? 'focused' : '',
                    ].join(' ')}
                    onClick={() => this.inputFocus('guests')}
                  >
                    <div className="label">GUESTS</div>
                    <div className="input-text">1 Guest</div>
                  </div>
                </div>
                <div className="button-field">
                  <i className="material-icons">search</i>
                </div>
              </div>
            )}
          </Consumer>
        </div>
      </ContentLayout>
    );
  }
}

export default Home;
