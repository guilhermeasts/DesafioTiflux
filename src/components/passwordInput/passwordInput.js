import React from "react";

function PasswordInput({src, src2}) {
    return (
      <div className='password'>
        <p className='poppins-medium'>Senha</p>
        <div className='inputBox'>
          <img src={src} alt='Senha' />
          <input placeholder='Digite sua senha' className='roboto-regular' type='password' />
          <img src={src2} alt='Olho' id='eye' />
        </div>
      </div>
    );
  }
  
export default PasswordInput 