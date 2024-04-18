import React from 'react';

function Image({ src }) {
  return (
    <div className='image'>
      <img src={src} alt='Imagem' />
    </div>
  );
}

export default Image;