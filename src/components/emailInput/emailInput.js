import React from "react";

function EmailInput({src}) {
    return (
      <div className='email'>
        <p className='poppins-medium'>E-mail</p>
        <div className='inputBox'>
          <img src={src} alt='E-mail' />
          <input placeholder='Digite seu e-mail' className='roboto-regular' />
        </div>
      </div>
    );
  }

export default EmailInput