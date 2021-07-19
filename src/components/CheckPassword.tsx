import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const CheckPassword: React.FC = () => {
  const [passwordToCheck, setPasswordToCheck] = useState('');

  interface IInitialInfo {
    toShortPassword?: string;
    easyPasswordText?: string;
    mediumPasswordText?: string;
    strongPasswordText?: string;
  }

  const [typesOfPassword, setTypesOfPassword] = useState<IInitialInfo>( {
    toShortPassword: '',
    easyPasswordText: '',
    mediumPasswordText: '',
    strongPasswordText: '',
  });

  const [changeInputPassword, setChangeInputPassword] = useState(true);

  let timeout;

  useEffect(() => {
    spinner();

    check();

    stopSpinner();
  }, [passwordToCheck, timeout]);

  const handleChange = (e:React.FormEvent<HTMLInputElement>):void => {
    setPasswordToCheck(e.currentTarget.value);
    check();
  };

  const checkYourPassword = (passwordToCheck: string): void => {
    let strongPassword = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,})'
    );
    let mediumPassword = new RegExp(
      '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,11}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,11}))'
    );

    if (passwordToCheck.length === 0) {
      setTypesOfPassword({});
    } else if (passwordToCheck.length < 6) {
      setTypesOfPassword({
        toShortPassword: 'Your password is to short... Change your password.',
      });
    } else if (strongPassword.test(passwordToCheck)) {
      setTypesOfPassword({
        strongPasswordText: `Your password is Strong - that has at least 1 lowercase letter, 1 uppercase letter, 1 digit, 1 special character, and is at least 12 characters long.`,
      });
    } else if (mediumPassword.test(passwordToCheck)) {
      setTypesOfPassword({
        mediumPasswordText: `Your password is Medium - that has 6-11 characters long at least 1 lowercase letter, 1 uppercase letter, 1 special character.`,
      });
    } else {
      setTypesOfPassword({
        easyPasswordText: `Your password is Easy - that hasn't 6-11 characters long at least 1 lowercase letter, 1 uppercase letter, 1 special character.`,
      });
    }
  };

  // Check Password
  const check = ():void => {
    timeout = setTimeout(() => checkYourPassword(passwordToCheck), 100);
  };

  // Loader
  const spinner = ():void => {
    document.getElementById('spinner')!.style.display = 'flex';
  };
  const stopSpinner = ():void => {
    const spinnerDelay = () => {
      document.getElementById('spinner')!.style.display = 'none';
    };
    setTimeout(spinnerDelay, 550);
  };

  return (
    <div className='mainContainerCheckPasswords'>
      <div className='mainContainerCheckPasswords_text'>
        Check Your Password:
      </div>
      <div className='mainContainerCheckPasswords_input'>
        {changeInputPassword ? (
          <input
            type='password'
            placeholder='Check here...'
            className='checkPassword'
            value={passwordToCheck}
            onChange={handleChange}
          />
        ) : (
          <input
            type='text'
            placeholder='Check here...'
            className='checkPassword'
            value={passwordToCheck}
            onChange={handleChange}
          />
        )}
        <button
          className='btn-changeInputPassword'
          onClick={() => setChangeInputPassword(!changeInputPassword)}
        >
          <span className='actionIcon-icon'>
            <i
              className={`${
                changeInputPassword ? 'fa fa-eye-slash' : 'fa fa-eye fa-lg:'
              }`}
            ></i>
          </span>
        </button>
      </div>

      <div className='mainContainerCheckPasswords_spinier'>
        <div id='spinner' className='loading'>
          Loading...
        </div>
      </div>

      <div className='mainContainerCheckPasswords_resolveInformationAboutPassword'>
        <p style={{ color: 'red' }}>{typesOfPassword.toShortPassword}</p>

        <p style={{ color: 'red' }}>{typesOfPassword.easyPasswordText}</p>

        <p style={{ color: 'orange' }}>{typesOfPassword.mediumPasswordText}</p>

        <p style={{ color: 'chartreuse' }}>
          {typesOfPassword.strongPasswordText}
        </p>
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
