import React from 'react';
import { DateRangePicker } from 'react-dates';

// Styles
import './home.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Layout
import ContentLayout from '../../layout/Content';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
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
        </div>
      </ContentLayout>
    );
  }
}

export default Home;
