import React, { useState, useEffect } from 'react';
import SingleEl from './SingleEl';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectPasswords,
  clearSelectedPasswords,
  deleteSelectedPassword,
} from '../redux/password/passwordActions';

const SavedPasswords = () => {
  const [selectAll, setSelectAll] = useState(false);

  const dispatch = useDispatch();

  const passwordArr = useSelector(
    (state) => state.passwordReducer.savedPasswordsArr
  );

  const setSelectAllPasswordToDispatch = () => {
    if (selectAll) {
      dispatch(selectPasswords(passwordArr.map((el) => el.id)));
    } else {
      dispatch(clearSelectedPasswords());
    }
  };

  useEffect(() => {
    setSelectAllPasswordToDispatch();
  }, [selectAll]);

  return (
    <div className='mainContainerSavedPasswords'>
      <div className='mainContainerSavedPasswords-text'>Saved Passwords:</div>
      <div className='mainContainerSavedPasswords-tableBox'>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Password for:</th>
              <th>Password:</th>
              <th>Action:</th>
              <th>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    id='checkbox'
                    value={selectAll}
                    onChange={() => setSelectAll(!selectAll)}
                  />
                  <label htmlFor='checkbox'></label>
                </div>
              </th>
            </tr>
          </thead>
          {passwordArr.map((singleEl, index) => (
            <SingleEl
              key={index}
              singleEl={singleEl}
              index={index}
              selectAll={selectAll}
              setSelectAll={setSelectAll}
            />
          ))}
        </table>
      </div>

      <div className='mainContainerSavedPasswords-buttons'>
        <Link to='./' className='btn-backHome'>
          Back
        </Link>
        <Link to='./checkPassword' className='btn-checkedPassword'>
          Check Your Password
        </Link>
        {selectAll ? (
          <button
            className='btn-removeChecked'
            onClick={() => dispatch(deleteSelectedPassword())}
          >
            Remove Checked
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SavedPasswords;
