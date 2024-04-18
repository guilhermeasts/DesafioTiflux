import React, { useState } from 'react';
import EmailInput from './emailInput';
import PasswordInput from './passwordInput';
import Checkbox from './checkbox';
import Button from './button';

import mail from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'
import eye from '../../assets/eye.svg'
import mailFocus from '../../assets/mail-focus.svg'
import lockFocus from '../../assets/lock-focus.svg'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailSelected, setEmailSelected] = useState(false); 
  const [passwordSelected, setPasswordSelected] = useState(false); 

  const handleEmailFocus = () => {
    setEmailSelected(true); 
  }

  const handleEmailBlur = () => {
    setEmailSelected(false); 
  }

  const handlePasswordFocus = () => {
    setPasswordSelected(true); 
  }

  const handlePasswordBlur = () => { 
    setPasswordSelected(false); 
  }

  const handleSubmit = (event) => { // Recebe o que esta  nos inputs 
    event.preventDefault();
    console.log("Email:", email, "Password:", password); // Apenas para demonstrar que esta salvando os valores quando clica no botão. 

  }

  return (

    <form onSubmit={handleSubmit}>
        <EmailInput
        src={emailSelected ? mailFocus : mail} // Altera entre o icone entre o normal e o focus se estiver selecionado o input 
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
      />
      <PasswordInput
        src={passwordSelected ? lockFocus : lock} // Altera entre o icone entre o normal e o focus se estiver selecionado o input 
        src2={eye}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        onFocus={handlePasswordFocus}
        onBlur={handlePasswordBlur}
      />
        <Checkbox />
        <Button text="Entrar" onClick={handleSubmit} />
    </form>
     
  );
}

export default LoginForm;