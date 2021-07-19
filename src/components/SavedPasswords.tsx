import React, { useState, useEffect } from 'react';
import SingleEl from './SingleEl';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';


import {
  selectPasswords,
  clearSelectedPasswords,
  deleteSelectedPassword,
} from '../redux/password/passwordActions';

const SavedPasswords: React.FC = () => {

  const [isSelectAll, setIsSelectAll] = useState(false);

  const dispatch = useDispatch();

  const passwordsArr = useSelector(
    (state:any) => state.passwordReducer.savedPasswordsArr
  );

  const setIsSelectAllPasswordToDispatch = () => {
    if (isSelectAll) {
      dispatch(selectPasswords(passwordsArr.map((el:any) => el.id)));
    } else {
      dispatch(clearSelectedPasswords());
    }
  };

  useEffect(() => {
    setIsSelectAllPasswordToDispatch();
  }, [isSelectAll]);

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
                    onChange={() => setIsSelectAll(!isSelectAll)}
                  />
                  <label htmlFor='checkbox'></label>
                </div>
              </th>
            </tr>
          </thead>
          {passwordsArr.map((singleEl: object, index: number) => (
            <SingleEl
              key={index}
              singleEl={singleEl}
              index={index}
              isSelectAll={isSelectAll}
              setIsSelectAll={setIsSelectAll}
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
        {isSelectAll ? (
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
