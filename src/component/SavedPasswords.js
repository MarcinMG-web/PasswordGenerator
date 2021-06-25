import React from 'react';
import { Link } from 'react-router-dom';

const SavedPasswords = () => {
  return (
    <div className='mainContainerSavedPasswords'>
      <div className='mainContainerSavedPasswords-text'>Saved Passwords:</div>

      <div className='mainContainerSavedPasswords-table'>
        <table style={{ width: '100%' }}>
          <tr>
            <th>#</th>
            <th>Password for:</th>
            <th>Password</th>
          </tr>
          <tr>
            <th>1</th>
            <td>Jill</td>
            <td>id2".h),tg*+l%$6ksue",n12voa</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Smith</td>
            <td>j6n'+b)8mwf7nsp&h92)65tv)i6/</td>
          </tr>
        </table>
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
