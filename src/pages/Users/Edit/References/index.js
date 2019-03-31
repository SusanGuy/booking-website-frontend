import React, { useState } from 'react';

// Componnets
import Input from '../../../../components/Form/Input';

// Layout
import EditLayout from '../Layout';

const References = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <EditLayout title="References">
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

export default References;
