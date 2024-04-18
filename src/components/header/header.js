import React from "react";

function Header({ src }) {
    return (
      <header>
        <img src={src} alt='Login' />
        <h1 className='poppins-semibold'>Faça seu login</h1>
        <p className='roboto-medium'>Entre com suas informações de cadastro.</p>
      </header>
    );
  }

export default Header  