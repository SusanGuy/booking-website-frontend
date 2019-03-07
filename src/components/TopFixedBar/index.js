import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './topFixedBar.css';

// Actions
import * as menuActions from '../../actions/menu';

// Selectors
import * as menuSelectors from '../../reducers/menu';

const TopFixedBar = ({ fixedBar, setFixedBarOpened }) => {
  const { opened, message } = fixedBar;

  /* useEffect(() => {
    setTimeout(() => {
      setFixedBarOpened(false);
    }, 10000);
  }); */

  console.log('opened', opened);

  return (
    <div className={['TopFixedBar', opened ? 'content' : ''].join(' ')}>
      {opened && (
        <React.Fragment>
          <div className="TopFixedBar--message">{message}</div>
          <div
            className="TopFixedBar--icon"
            onClick={() => setFixedBarOpened({ opened: false, message: '' })}
          >
            <i class="material-icons">close</i>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    fixedBar: menuSelectors.getFixedBar(state),
  };
}

const actionCreators = {
  setFixedBarOpened: menuActions.setFixedBarOpened,
};

export default connect(
  mapStateToProps,
  actionCreators
)(TopFixedBar);
