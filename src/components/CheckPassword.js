import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const CheckPassword = () => {
  const [passwordToCheck, setPasswordToCheck] = useState('');

  const initialInfo = {
    toShortPassword: '',
    easyPasswordText: '',
    mediumPasswordText: '',
    strongPasswordText: '',
  };

  const [typesOfPassword, setTypesOfPassword] = useState(initialInfo);

  let timeout;

  useEffect(() => {
    spinner();

    check();

    stopSpinner();
  }, [passwordToCheck, timeout]);

  const handleChange = (e) => {
    setPasswordToCheck(e.target.value);
    check();
  };

  const checkYourPassword = () => {
    let strongPassword = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,})'
    );
    let mediumPassword = new RegExp(
      '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,11}))'
    );

    if (passwordToCheck.length === 0) {
      setTypesOfPassword({});
    } else if (passwordToCheck.length < 6) {
      setTypesOfPassword({ toShortPassword: 'Your password is to short...' });
    } else if (strongPassword.test(passwordToCheck)) {
      setTypesOfPassword({ strongPasswordText: 'Your password is Strong' });
    } else if (mediumPassword.test(passwordToCheck)) {
      setTypesOfPassword({ mediumPasswordText: 'Your password is Medium' });
    } else {
      setTypesOfPassword({ easyPasswordText: 'Your password is Easy' });
    }
  };
  // Check Password
  const check = () => {
    timeout = setTimeout(() => checkYourPassword(passwordToCheck), 100);
  };

  // Loader
  const spinner = () => {
    document.getElementById('spinner').style.display = 'flex';
  };
  const stopSpinner = () => {
    const spinnerDelay = () => {
      document.getElementById('spinner').style.display = 'none';
    };
    setTimeout(spinnerDelay, 550);
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
          value={passwordToCheck}
          onChange={handleChange}
        />
      </div>

      <div className='mainContainerCheckPasswords_spinier'>
        <div id='spinner' className='loading'>
          Loading...
        </div>
      </div>

      <div className='mainContainerCheckPasswords_resolveInformationAboutPassword'>
        {typesOfPassword.toShortPassword}
        {typesOfPassword.easyPasswordText}
        {typesOfPassword.mediumPasswordText}
        {typesOfPassword.strongPasswordText}
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
