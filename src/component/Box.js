import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addPassword } from '../redux/password/passwordActions';

const Box = () => {
  const [password, setPassword] = useState('');
  const [passwordName, setPasswordName] = useState('');

  const [passwordLength, setPasswordLength] = useState(22);
  const [includeLetters, setIncludeLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbol, setIncludeSymbols] = useState(false);

  const dispatch = useDispatch();

  const chandlerChangePasswordLength = (e) => {
    setPasswordLength(e.target.value);
  };

  const settingPassword = () => {
    if (includeLetters || includeNumbers || includeSymbol) {
      let characterList = [];
      if (includeLetters) {
        const tabLetters = Array(26)
          .fill(0)
          .map((el, i) => String.fromCharCode(97 + i));
        characterList.push(...tabLetters);
      }
      if (includeNumbers) {
        const tabNumbers = Array(10)
          .fill(0)
          .map((el, i) => i);
        characterList.push(...tabNumbers);
      }
      if (includeSymbol) {
        const specialChar = Array(15)
          .fill(0)
          .map((el, i) => String.fromCharCode(33 + i));
        characterList.push(...specialChar);
      }
      return setPassword(createPassword(characterList));
    } else {
      return setPassword('Set the opportunities');
    }
  };

  const createPassword = (characterList) => {
    const min = 0;
    const max = characterList.length - 1;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const rand = Math.floor(Math.random() * (max - min + 1) + min);
      password += characterList[rand];
    }
    return password;
  };

  const onClickAddPassword = () => {
    dispatch(
      addPassword({
        passwordName: passwordName,
        password: password,
        id: Date.now(),
      })
    );
  };

  return (
    <div className='mainContainer'>
      <div className='mainContainer_generatePassword'>{password}</div>

      <div className='mainContainer_seating'>
        <div className='range-slider' data-min='8' data-max='32'>
          <label className='range-slider-label'>Length password:</label>
          <input
            type='range'
            min='8'
            max='32'
            value={passwordLength}
            onChange={chandlerChangePasswordLength}
          />
          <div className='range-slider-result' style={{ color: 'red' }}>
            {passwordLength}
          </div>
        </div>

        <div className='checkBoxContainer'>
          <label className='checkBoxContainer_label'>Include Letters:</label>
          <label className='checkBoxContainer_label-switch'>
            <input
              type='checkbox'
              checked={includeLetters}
              onChange={(e) => setIncludeLetters(e.target.checked)}
              className='checkBox-input'
            />
            <span className='slider round'></span>
          </label>
        </div>

        <div className='checkBoxContainer'>
          <label className='checkBoxContainer_label'>Include Numbers:</label>
          <label className='checkBoxContainer_label-switch'>
            <input
              type='checkbox'
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className='checkBox-input'
            />
            <span className='slider round'></span>
          </label>
        </div>

        <div className='checkBoxContainer'>
          <label className='checkBoxContainer_label'>Include Symbols:</label>
          <label className='checkBoxContainer_label-switch'>
            <input
              type='checkbox'
              checked={includeSymbol}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className='checkBox-input'
            />
            <span className='slider round'></span>
          </label>
        </div>

        <div className='mainContainer_savePassword'>
          <div className='mainContainer_savePassword-name'>
            Your name password:
            <input
              type='text'
              className='mainContainer_savePassword-name-textInput'
              value={passwordName}
              onChange={(e) => setPasswordName(e.target.value)}
            />
          </div>
          <div className='mainContainer_savePassword-password'>
            Your generated password:
            <span style={{ color: '#fff', display: 'block' }}>{password}</span>
          </div>
        </div>

        <div className='mainContainer_button'>
          <button className='btn-savePassword' onClick={onClickAddPassword}>
            Save password
          </button>
          <button className='btn-create' onClick={settingPassword}>
            Create
          </button>
          <Link to='./SavedPasswords' className='btn-tableSavePassword'>
            Move to the save password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Box;
