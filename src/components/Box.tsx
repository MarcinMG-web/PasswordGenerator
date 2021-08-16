import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addPassword } from '../redux/password/passwordActions';

const Box: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordName, setPasswordName] = useState('');

  const [passwordLength, setPasswordLength] = useState(22);
  const [includeLetters, setIncludeLetters] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbol, setIncludeSymbols] = useState(false);

  const dispatch = useDispatch();

  const chandlerChangePasswordLength = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordLength(e.target.valueAsNumber);
  };

  const settingPassword = (): void => {
    if (includeLetters || includeUppercase || includeNumbers || includeSymbol) {
      let characterList = [];
      if (includeLetters) {
        const tabLetters = Array(26)
          .fill(0)
          .map((el, i) => String.fromCharCode(97 + i));
        characterList.push(...tabLetters);
      }
      if (includeUppercase) {
        const tabUpperLetters = Array(26)
          .fill(0)
          .map((el, i) => String.fromCharCode(65 + i));
        characterList.push(...tabUpperLetters);
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

  const createPassword = (characterList: any):string => {
    const min = 0;
    const max = characterList.length - 1;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const rand = Math.floor(Math.random() * (max - min + 1) + min);
      password += characterList[rand];
    }
    return password;
  };

  const onClickAddPassword = ():void => {
    if (
      passwordName !== '' &&
      (password === '' || password !== 'Set the opportunities') &&
      password !== ''
    ) {
      dispatch(
        addPassword({
          passwordName: passwordName,
          password: password,
          id: Date.now(),
        })
      );
    } else {
      setPasswordName('Set the name password');
      setPassword('Set the opportunities');
    }
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
          <div className='range-slider-result'>{passwordLength}</div>
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
          <label className='checkBoxContainer_label'>Include Uppercase:</label>
          <label className='checkBoxContainer_label-switch'>
            <input
              type='checkbox'
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
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
              className='mainContainer_savePassword-name-textInput_green'
              value={passwordName}
              onChange={(e) => setPasswordName(e.target.value)}
              onClick={() => setPasswordName('')}
            />
          </div>
          <div className='mainContainer_savePassword-password'>
            Your generated password:
            <input
              type='text'
              className='mainContainer_savePassword-name-textInput_red'
              defaultValue={password}
            />
          </div>
        </div>

        <div className='mainContainer_button'>
          <button className='btn-create' onClick={settingPassword}>
            Create
          </button>
          <button className='btn-savePassword' onClick={onClickAddPassword}>
            Save password
          </button>
          <Link to='./SavedPasswords' className='btn-tableSavePassword'>
            Move to the save password
          </Link>
          <Link to='./checkPassword' className='btn-checkedPassword'>
            Check Your Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Box;
