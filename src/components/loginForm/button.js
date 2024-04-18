import React from 'react';

function Button({ text, onClick }) {
  return (
    <button className='poppins-semibold' onClick={onClick}>{text}</button>
  );
}

export default Button;