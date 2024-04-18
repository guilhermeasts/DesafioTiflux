import React from 'react';
import './App.css';

import logo from './assets/logo.svg'
import login from './assets/log-in.svg'
import sideimage from './assets/side-image.svg'
import mail from './assets/mail.svg'
import lock from './assets/lock.svg'
import eye from './assets/eye.svg'

import Image from './components/image/image';
import Header from './components/header/header'
import EmailInput from './components/emailInput/emailInput';
import PasswordInput from './components/passwordInput/passwordInput';
import Checkbox from './components/checkbox/checkbox';
import Button from './components/button/button';
import Register from './components/register/register';







function LoginForm() {
  return (
    <div className='login'>
      <div className='loginbox'>
        <img src={logo} alt="Logo Tiflux" id='logo' />
        <Header src={login}/>
        <EmailInput src={mail}/>
        <PasswordInput src={lock} src2={eye}/>
        <Checkbox />
        <Button />
        <Register />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='main'>
      <Image src={sideimage}/>
      <LoginForm />
    </div>
  );
}

export default App;
