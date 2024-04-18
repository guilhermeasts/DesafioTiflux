import React from 'react';

function EmailInput({ src, value, onChange }) {
  return (
    <div className='email'>
      <p className='poppins-medium'>E-mail</p>
      <div className='inputBox'>
        <img src={src} alt="E-mail" />
        <input 
          type="email" 
          placeholder='Digite seu e-mail' 
          className='roboto-regular' 
          value={value} 
          onChange={onChange} 
        />
      </div>
    </div>
  );
}

export default EmailInput;