import React, { useState } from 'react';
import EmailInput from './emailInput';
import PasswordInput from './passwordInput';
import Checkbox from './checkbox';
import Button from './button';

import mail from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'
import eye from '../../assets/eye.svg'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email); // Apenas para demonstrar que esta salvando os valores quando clica no botão. 
    console.log("Password:", password);

  }

  return (

    <form onSubmit={handleSubmit}>
        <EmailInput src={mail} value={email} onChange={(event) => setEmail(event.target.value)} />
        <PasswordInput src={lock} src2={eye} value={password} onChange={(event) => setPassword(event.target.value)} />
        <Checkbox />
        <Button text="Entrar" onClick={handleSubmit} />
    </form>
     
  );
}

export default LoginForm;