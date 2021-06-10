import React, { useState } from 'react';

const Box = () => {
  const [password, setPassword] = useState('');

  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLetters, setIncludeLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbol, setIncludeSymbols] = useState(false);

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

  return (
    <div className='mainBox'>
      <div className='generatePassword'>{password}</div>

      <div className='seating'>
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

        <div className='checkBox-container'>
          <label className='checkBox-label'>Include Letters:</label>
          <label className='switch'>
            <input
              type='checkbox'
              checked={includeLetters}
              onChange={(e) => setIncludeLetters(e.target.checked)}
              className='checkBox-input'
            />
            <span className='slider round'></span>
          </label>
        </div>

        <div className='checkBox-container'>
          <label className='checkBox-label'>Include Numbers:</label>
          <label className='switch'>
            <input
              type='checkbox'
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className='checkBox-input'
            />
            <span className='slider round'></span>
          </label>
        </div>
        <div className='checkBox-container'>
          <label className='checkBox-label'>Include Symbols:</label>
          <label className='switch'>
            <input
              type='checkbox'
              checked={includeSymbol}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className='checkBox-input'
            />
            <span className='slider round'></span>
          </label>
        </div>
      </div>
      <div className='generatePassword_button'>
        <button className='btn-create' onClick={settingPassword}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Box;
