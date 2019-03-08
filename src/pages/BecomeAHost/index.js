import React, { useState } from 'react';

// Styles
import './becomeAHost.css';

// Layout
import ContentLayout from '../../layout/Content';

const BecomeAHost = () => {
  const [wildLifeType, setWildLifeType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [error, setError] = useState(null);

  const selectWilfLifeType = e => {
    setWildLifeType(e.target.value);
  };
  const selectPropertyType = e => {
    setPropertyType(e.target.value);
  };
  const handleSubmit = () => {
    let emptyWildLifeType = wildLifeType === '';
    let emptyPropertyType = propertyType === '';

    if (emptyWildLifeType || emptyPropertyType) {
      let fieldsWithError = [];
      emptyWildLifeType && fieldsWithError.push('wildlifeType');
      emptyPropertyType && fieldsWithError.push('propertyType');

      setError({
        fields: fieldsWithError,
        message: 'You need to complete the fields to progress forward',
      });
    }
  };

  return (
    <ContentLayout theme="white">
      <div className="BecomeAHost">
        <div className="BecomeAHost--form-box">
          {error && (
            <div className="BecomeAHost--form-box--error">
              <div className="BecomeAHost--form-box--error-info">
                <i className="material-icons">info_outline</i>
              </div>
              <div className="BecomeAHost--form-box--error-message">
                {error.message}
              </div>
              <div
                className="BecomeAHost--form-box--error-cancel-btn"
                onClick={() => setError(null)}
              >
                <i className="material-icons">close</i>
              </div>
            </div>
          )}
          <div className="BecomeAHost--form-box--title">
            What type of Wild Life are you hosting?
          </div>
          <div className="BecomeAHost--form-box--fields">
            <div className="BecomeAHost--form-box--fields-item">
              <div className="BecomeAHost--form-box--fields-item-title">
                First, let's narrow down
              </div>
              <select
                onChange={selectWilfLifeType}
                value={wildLifeType}
                className={[
                  'BecomeAHost--form-box--fields-item-dropdown',
                  error && error.fields.includes('wildlifeType') ? 'error' : '',
                ].join(' ')}
              >
                <option value="">Select one</option>
                <option value="1">Fishing</option>
                <option value="2">Deer Hunting</option>
                <option value="3">Bird Hunting</option>
                <option value="3">Wild Pig Hunting</option>
              </select>
              {error && error.fields.includes('wildlifeType') && (
                <div className="BecomeAHost--form-box--fields-item-error-message">
                  Please select an option
                </div>
              )}
            </div>
            <div className="BecomeAHost--form-box--fields-item">
              <div className="BecomeAHost--form-box--fields-item-title">
                Now choose a property type
              </div>
              <select
                disabled={wildLifeType === ''}
                onChange={selectPropertyType}
                value={propertyType}
                className={[
                  'BecomeAHost--form-box--fields-item-dropdown',
                  error && error.fields.includes('propertyType') ? 'error' : '',
                ].join(' ')}
              >
                <option value="">Select property type</option>
                <option value="1">Open Field</option>
                <option value="2">Separate Area</option>
                <option value="3">Camp</option>
                <option value="3">Woods</option>
              </select>
              {error && error.fields.includes('propertyType') && (
                <div className="BecomeAHost--form-box--fields-item-error-message">
                  Please select an option
                </div>
              )}
            </div>
          </div>
          <div className="BecomeAHost--form-box--footer">
            <div className="BecomeAHost--form-box--footer-item">
              <i className="material-icons">arrow_back</i>
              <div>Back</div>
            </div>
            <div className="BecomeAHost--form-box--footer-item">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={handleSubmit}
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default BecomeAHost;
