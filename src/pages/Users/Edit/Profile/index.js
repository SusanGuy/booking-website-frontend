import React, { useState } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

// Components
import Input from '../../../../components/Form/Input';

// Layout
import EditLayout from '../Layout';

// Selectors
import * as userSelectors from '../../../../reducers/user';

// Actions
import * as userActions from '../../../../actions/user';

const Profile = ({ user, updateUser, fetchUser }) => {
  const [update, setUpdate] = useState({
    show: false,
    error: false,
    message: '',
  });
  const [prop, setProp] = useState({
    first_name: user.first_name ? user.first_name : '',
    last_name: user.last_name ? user.last_name : '',
    email: user.email ? user.email : '',
    google_id: user.google_id ? user.google_id : '',
    address1: user.address1 ? user.address1 : '',
    address2: user.address2 ? user.address2 : '',
  });

  const handleUpdate = async (id, props) => {
    try {
      let response = await updateUser(id, props);
      let { status } = response;

      if (status) {
        setUpdate({
          show: true,
          error: false,
          message: 'Profile successfully updated.',
        });

        fetchUser(id);
      } else {
        setUpdate({
          show: true,
          error: true,
          message: status,
        });
      }

      window.scroll(0, 0);

      setTimeout(() => {
        setUpdate({
          ...update,
          show: false,
        });
      }, 4000);
    } catch (err) {
      setUpdate({ show: true, error: true, message: err.message });
    }
  };

  const updateClass = classnames({
    'EditContent--update': true,
    success: !update.error,
    error: update.error,
  });

  return (
    <div className="EditContent">
      {update.show && <div className={updateClass}>{update.message}</div>}
      <EditLayout title="Required">
        <Input
          label="First Name"
          value={prop.first_name}
          placeholder="Enter your first name"
          onChange={firstName => setProp({ ...prop, first_name: firstName })}
        />
        <Input
          label="Last Name"
          value={prop.last_name}
          placeholder="Enter your last name"
          onChange={lastName => setProp({ ...prop, last_name: lastName })}
        />
        <Input
          label="Email"
          value={prop.email}
          placeholder="Enter your E-mail"
          onChange={email => setProp({ ...prop, email: email })}
        />
        <Input
          label="Google ID"
          value={prop.google_id}
          onChange={googleId => setProp({ ...prop, google_id: googleId })}
          disabled
        />
        <Input
          label="Paypal ID"
          value={prop.paypal_id ? prop.paypal_id : ''}
          onChange={paypalId => setProp({ ...prop, paypal_id: paypalId })}
          disabled
        />
      </EditLayout>
      <EditLayout title="Location">
        <Input
          label="Address"
          value={prop.address1}
          placeholder="Enter your Address"
          onChange={address1 => setProp({ ...prop, address1: address1 })}
        />
        <Input
          label="Address2"
          value={prop.address2}
          placeholder="Enter your Address 2"
          onChange={address2 => setProp({ ...prop, address2: address2 })}
        />
      </EditLayout>
      <button
        className="waves-effect waves-light btn-large"
        onClick={() => handleUpdate(user.user_id, prop)}
        style={{ width: '100%' }}
      >
        Update
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: userSelectors.getUser(state),
  };
};

const actionCreators = {
  updateUser: userActions.updateUser,
  fetchUser: userActions.fetchUser,
};

export default connect(
  mapStateToProps,
  actionCreators
)(Profile);
