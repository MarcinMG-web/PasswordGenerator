import React from 'react';
import SingleEl from './SingleEl';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const SavedPasswords = () => {
  const passwordArr = useSelector(
    (state) => state.passwordReducer.savedPasswordsArr
  );

  return (
    <div className='mainContainerSavedPasswords'>
      <div className='mainContainerSavedPasswords-text'>Saved Passwords:</div>

      <div className='mainContainerSavedPasswords-tableBox'>
        <table className='table'>
          <thead>
            <tr>
              <th>
                <input type='checkbox' />
              </th>
              <th>#</th>
              <th>Password for:</th>
              <th>Password:</th>
              <th>Action:</th>
            </tr>
          </thead>
          {passwordArr.map((singleEl, index) => (
            <SingleEl key={index} singleEl={singleEl} index={index} />
          ))}
        </table>
      </div>

      <div className='mainContainerSavedPasswords-buttons'>
        <Link to='./' className='btn-backHome'>
          Back
        </Link>
        <button className='btn-removeChecked'>
          Remove Checked
        </button>
      </div>
    </div>
  );
};

export default SavedPasswords;
