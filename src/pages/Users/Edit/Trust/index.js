import React, { useState } from 'react';

// Components
import Input from '../../../../components/Form/Input';

// Layout
import EditLayout from '../Layout';

const Trust = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="EditContent">
      <EditLayout title="Trust">
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
    </div>
  );
};

export default Trust;
