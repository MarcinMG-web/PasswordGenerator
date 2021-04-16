import React, { useState } from 'react';

const Box = () => {
  const [password, setPassword] = useState('');
  const [radioInput, setRadioInput] = useState(0);

  const lenghtPassword = (e) => {
    setRadioInput( e.target.value );
    // console.log(radioInput);
  };

  const createPassword = (radioInput) => {

  
    const tabLetters = Array(26)
      .fill(0)
      .map((el, i) => String.fromCharCode(97 + i));

    const tabNumbers = Array(10)
      .fill(0)
      .map((el, i) => i);
    const specialChar = Array(15)
      .fill(0)
      .map((el, i) => String.fromCharCode(33 + i));


    const tab = [...tabLetters, ...tabNumbers, ...specialChar];

    let password = '';
    const min = 0;
    const max = tab.length - 1;
    for (let i = 0; i < 12; i++) {
      const rand = Math.floor(Math.random() * (max - min + 1) + min);
      password += tab[rand];
    }

    console.log('setPassword', password);
    return setPassword(password);
  };

  return (
    <div className='mainBox'>
      <div className='grneratePassword'> {password}</div>

      <div className='grneratePassword_button'>
        <button className='btn-create' onClick={createPassword}>
          Create
        </button>
      </div>

     
    </div>
  );
};

export default Box;
