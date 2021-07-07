import React, { useState } from 'react';

import { Link } from 'react-router-dom';


const CheckPassword = () => {
  const [passwordToCheck, setPasswordToCheck] = useState('');

  const initialError = {
    toShortPassword: '',

    easyPassword: '',
    mediumPassword: '',
    intermediatePassword: '',
    strongPassword: '',
    veryStrongPassword: '',
  };

  const [typesOfPassword, setTypesOfPassword] = useState(initialError);

  const handleChange = (e) => {
    // spinner();
    setPasswordToCheck(e.target.value);
    check();
    // stopSpinner()
  };

  const checkYourPassword = () => {
    
    let toShortPassword;
    let easyPassword;
    let mediumPassword;
    let intermediatePassword;
    let strongPassword;
    let veryStrongPassword;

    if (passwordToCheck.length <= 6) {
      toShortPassword = 'Your Password is to short. ';
      // stopSpinner()
    }

    function validateEasyPassword(passwordToCheck) {
      const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,8}$/;
      const result = pattern.test(passwordToCheck);

      if (result) {
        easyPassword =
          'Your password has 6 - 8 sings at least 1 letter, 1 number. ';
      } else {
        easyPassword = '';
      }
    }

    function validateMediumPassword(passwordToCheck) {
      const pattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,10}$/;
      const result = pattern.test(passwordToCheck);

      if (result) {
        intermediatePassword =
          'Your password has 9-10 sings at least 1 letter, 1 number and  1 special character. ';
      } else {
        intermediatePassword = '';
      }
    }

    function validateIntermediatePassword(passwordToCheck) {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,10}$/;
      const result = pattern.test(passwordToCheck);

      if (result) {
        mediumPassword =
          'Your password has 9-10 sings at least 1 uppercase letter, 1 lowercase letter, and 1 number. ';
      } else {
        mediumPassword = '';
      }
    }

    function validateStrongPassword(passwordToCheck) {
      const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,12}$/;
      const result = pattern.test(passwordToCheck);

      if (result) {
        strongPassword =
          'Your password has at least 11 - 12 sings at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character. ';
      } else {
        strongPassword = '';
      }
    }

    function validateVeryStrongPassword(passwordToCheck) {
      const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
      const result = pattern.test(passwordToCheck);

      if (result) {
        veryStrongPassword =
          'Your password has more that 12 sings at least one uppercase letter, one lowercase letter, one number and one special character. ';
      } else {
        veryStrongPassword = '';
      }
    }

    spinner();
    validateEasyPassword(passwordToCheck);
    validateMediumPassword(passwordToCheck);
    validateIntermediatePassword(passwordToCheck);
    validateStrongPassword(passwordToCheck);
    validateVeryStrongPassword(passwordToCheck);
    stopSpinner();

    if (
      toShortPassword ||
      easyPassword ||
      mediumPassword ||
      intermediatePassword ||
      strongPassword ||
      veryStrongPassword
    ) {
      setTypesOfPassword({
        toShortPassword,
        easyPassword,
        mediumPassword,
        intermediatePassword,
        strongPassword,
        veryStrongPassword,
      });
      return false;
    }
    return true;
  };

  const check = () => {
    const isValid = checkYourPassword();
    if (isValid) {
      //clear error
      setTypesOfPassword('');
    }
  };

  console.log('typesOfPassword', typesOfPassword);

  // Loader
  const spinner = () => {
    document.getElementById('spinner').style.display = 'flex';
  };
  const stopSpinner = () => {
    const spinnerDelay = () => {
      document.getElementById('spinner').style.display = 'none';
    };
    setTimeout(spinnerDelay, 500);
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
        {typesOfPassword.easyPassword}
        {typesOfPassword.mediumPassword}
        {typesOfPassword.intermediatePassword}
        {typesOfPassword.strongPassword}
        {typesOfPassword.veryStrongPassword}
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
