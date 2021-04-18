import React, { useState, useEffect } from 'react';

const Box = () => {
  const [password, setPassword] = useState('');

  const [passwordLenght, setPasswordLenght] = useState(12);
  const [includeLetters, setIncludeLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbol, setIncludeSymbols] = useState(false);

  useEffect(() => {
    const el = document.querySelector('.resultRange');
    if (el) {
      el.style.left = `${Number(passwordLenght / 4)}px`;
    }
  });

  const chandleChangePasswordLenght = (e) => {
    setPasswordLenght(e.target.value);
  };

  const settingPassword = (e) => {

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
      return setPassword('');
    }
  };

  const createPassword = (characterList) => {
    const min = 0;
    const max = characterList.length - 1;

    let password = '';
    for (let i = 0; i < passwordLenght; i++) {
      const rand = Math.floor(Math.random() * (max - min + 1) + min);
      password += characterList[rand];
    }
    return password;
  };

  return (
    <div className='mainBox'>
      <div className='grneratePassword'> {password}</div>

      <div className='grneratePassword_button'>
        <button className='btn-create' onClick={settingPassword}>
          Create
        </button>
      </div>

      <div className='seating'>
        <div className='range-slider' data-min='8' data-max='32'>
          <label>length password</label> <br />
          <input
            type='range'
            min='1'
            max='30'
            value={passwordLenght}
            onChange={chandleChangePasswordLenght}
          />
          <div className='resultRange'>
            {passwordLenght}
            <br />
          </div>
          <div>
            <label>include Letter:</label>
            <input
              type='checkbox'
              checked={includeLetters}
              onChange={(e) => setIncludeLetters(e.target.checked)}
            />
          </div>
          <div>
            <label>include Numbers:</label>
            <input
              type='checkbox'
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>
          <div>
            <label>include Symbol:</label>
            <input
              type='checkbox'
              checked={includeSymbol}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
