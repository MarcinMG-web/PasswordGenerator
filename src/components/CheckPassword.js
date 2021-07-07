import React from 'react';

import { Link } from 'react-router-dom';

const CheckPassword = () => {
  
  const checkYourPassword = () => {
     spinner();
     stopSpinner()
  };

  // Loader
  const spinner = () => {
    document.getElementById('spinner').style.display = 'flex';
  };
  const stopSpinner = () => {
    const spinnerDelay = () => {
      document.getElementById('spinner').style.display = 'none';
    };
    setTimeout(spinnerDelay, 1000);
  };

  return (
    <div className='mainContainerCheckPasswords'>
      <div className='mainContainerCheckPasswords_text'>
        Check Your Password:
      </div>

      <div className='mainContainerCheckPasswords_input'>
        <input
          type='text'
          placeholder='Check here...'
          className='checkPassword'
          onChange={checkYourPassword}
        />
      </div>

      <div className='mainContainerCheckPasswords_spinier'>

        <div id='spinner' className='loading'>Loading...</div>

      </div>

      <div className='mainContainerCheckPasswords_resolveInformationAboutPassword'>
        Information
      </div>

      <div className='mainContainerCheckPassword_buttons'>
        <Link to='./' className='btn-backHome'>
          Back
        </Link>
      </div>
    </div>
  );
};

export default CheckPassword;
