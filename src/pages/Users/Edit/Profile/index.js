import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import * as usersActions from '../../../../actions/user';

// Components
import Input from '../../../../components/Form/Input';

// Layout
import EditLayout from '../Layout';

const Profile = ({ fetchUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      fetchUser();
    }, 100);
  });

  return (
    <EditLayout title="Required">
      <Input
        label="First Name"
        value={firstName}
        placeholder="Enter your first name"
        onChange={firstName => setFirstName(firstName)}
      />
      <Input
        label="Last Name"
        value={lastName}
        placeholder="Enter your last name"
        onChange={lastName => setLastName(lastName)}
      />
    </EditLayout>
  );
};

const actionCreators = {
  fetchUser: usersActions.fetchUser,
};

export default connect(
  null,
  actionCreators
)(Profile);
