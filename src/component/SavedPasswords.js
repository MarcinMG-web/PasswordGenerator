import React from 'react';
import { Link } from 'react-router-dom';

const SavedPasswords = () => {
  return (
    <div className='mainContainerSavedPasswords'>
      <div className='mainContainerSavedPasswords-text'>Saved Passwords:</div>

      <div className='mainContainerSavedPasswords-table'>
          Place for table
      </div>

      <div className='mainContainerSavedPasswords-buttons'>
        <Link to='./' className='btn-backHome'>
          Back
        </Link>
      </div>
    </div>
  );
};

export default SavedPasswords;
