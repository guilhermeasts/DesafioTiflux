import React, { useState } from 'react';

function PasswordInput({ src, src2, value, onChange, onFocus, onBlur }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Para alterar o tipo de senha para texto e vice versa semelhante o input de check
  };

  return (
    <div className='password'>
      <p className='poppins-medium'>Senha</p>
      <div className='inputBox'>
        <img src={src} alt="Senha" />
        <input 
          type={showPassword ? 'text' : 'password'} 
          placeholder='Digite sua senha' 
          className='roboto-regular' 
          value={value} 
          onChange={onChange} 
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <img 
          src={src2} 
          alt="Olho" 
          id='eye' 
          onClick={togglePasswordVisibility} 
        />
      </div>
    </div>
  );
}

export default PasswordInput;