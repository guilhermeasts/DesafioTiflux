import React from 'react';

function PasswordInput({ src, src2, value, onChange }) {
  return (
    <div className='password'>
      <p className='poppins-medium'>Senha</p>
      <div className='inputBox'>
        <img src={src} alt="Senha" />
        <input 
          type="password" 
          placeholder='Digite sua senha' 
          className='roboto-regular' 
          value={value} 
          onChange={onChange} 
        />
        <img src={src2} alt="Olho" id='eye' />
      </div>
    </div>
  );
}

export default PasswordInput;