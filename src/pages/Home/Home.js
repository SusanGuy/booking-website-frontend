import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import { withRouter } from 'react-router-dom';

// Selectors
import * as authSelectors from '../../reducers/auth';

// Styles
import './home.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Assets
import icons from '../../shared/icons';

// Layout
import ContentLayout from '../../layout/Content';

const iconMap = {
  establishment: icons.pushPin,
  locality: icons.mapsAndFlags,
  others: icons.tree,
};

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      where: '',
      guestsCount: 1,
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
    let className = event.target.className;
    let dropdownItemClassName = 'Home--fields--dropdown-item';
    let dropdownImageClassName = 'Home--fields--dropdown-image';

    // TOOD:  Update this Workaround section
    //        Find a better way to update the state
    if (className === dropdownItemClassName) {
      let where = event.target.querySelector('div').innerHTML;

      this.setState({
        where,
      });
    } else if (className === dropdownImageClassName) {
      let guestsCount = event.target;

      if (guestsCount.alt === 'minus') {
        this.setState(prevState => ({
          guestsCount:
            prevState.guestsCount <= 1 ? 1 : prevState.guestsCount - 1,
        }));
      } else {
        this.setState(prevState => ({
          guestsCount: prevState.guestsCount + 1,
        }));
      }
    }

    if ([dropdownImageClassName].includes(event.target.className)) {
      return;
    }

    if (this.locationRef !== event.target) {
      this.setState({
        ...this.state,
        fieldFocusedInput: {
          ...this.fieldFocusedInput,
          location: false,
        },
      });
    } else if (this.datesRef !== event.target) {
      this.setState({
        ...this.state,
        fieldFocusedInput: {
          ...this.fieldFocusedInput,
          date: false,
        },
      });
    } else if (this.guestsRef !== event.target) {
      this.setState({
        ...this.state,
        fieldFocusedInput: {
          ...this.fieldFocusedInput,
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

  handleWhere = e => {
    e.preventDefault();
    e.stopPropagation();

    let where = e.target.value;

    this.setState({
      ...this.state,
      where,
    });

    this.props.fetchAutoComplete(where);
  };

  decreaseGuestsCount = e => {
    e.preventDefault();
    this.setState(prevState => ({
      guestsCount: prevState.guestsCount + 1,
    }));
  };

  increaseGuestsCount = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        guestsCount: prevState.guestsCount <= 0 ? 0 : prevState.guestsCount + 1,
      };
    });
  };

  renderQuery = () => {
    const { where, guestsCount, startDate, endDate } = this.state;

    const query = where.replace(/[, ]+/g, '--').trim();

    this.props.history.push(
      `/s/${query}/all?query=${where}&checkin=${startDate}&checkout=${endDate}&guests=${guestsCount}`
    );
  };

  render() {
    const {
      where,
      guestsCount,
      fieldFocusedInput: { location, date, guests },
    } = this.state;
    const { places, isMobileHeight, isMobileWidth } = this.props;

    return (
      <ContentLayout>
        <div
          className={[
            'Home',
            date && isMobileHeight ? 'mobile-height' : '',
          ].join(' ')}
        >
          <h1>
            Plan your next{' '}
            <span style={{ color: 'var(--theme-main)' }}>wildlife</span>{' '}
            experience
          </h1>
          <div className="Home--search-location">
            <div className="Home--fields col s12">
              <div
                ref={input => (this.locationInputRef = input)}
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
                  value={where}
                  onChange={e => this.handleWhere(e)}
                  className="input-text"
                />
                {location && (
                  <div className="Home--fields--dropdown">
                    {places.length > 0 &&
                      places.map(({ name, type }) => {
                        return (
                          <div
                            key={name}
                            className="Home--fields--dropdown-item"
                          >
                            <img
                              src={
                                iconMap[type]
                                  ? iconMap[type]
                                  : iconMap['others']
                              }
                              className="Home--fields--dropdown-image"
                              alt="ico"
                            />
                            <div>{name}</div>
                          </div>
                        );
                      })}
                  </div>
                )}
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
                        onDateChange={date => this.setState({ endDate: date })} // PropTypes.func.isRequired,
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
                <div className="input-text">{`${guestsCount} Guest`}</div>
                {guests && (
                  <div className="Home--fields--dropdown">
                    <div className="Home--fields--dropdown-item">
                      <img
                        src={icons.minus}
                        alt="minus"
                        className="Home--fields--dropdown-image"
                      />
                      <div>{guestsCount}</div>
                      <img
                        src={icons.plus}
                        alt="plus"
                        className="Home--fields--dropdown-image"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="button-field" onClick={() => this.renderQuery()}>
              <i className="material-icons">search</i>
            </div>
          </div>
        </div>
      </ContentLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMobileHeight: authSelectors.isMobileHeight(state),
    isMobileWidth: authSelectors.isMobileWidth(state),
  };
}

export default connect(mapStateToProps)(withRouter(Home));
