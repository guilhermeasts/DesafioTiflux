import React, { useState } from 'react';
import './App.css';

import sideimage from './assets/side-image.svg'
import Image from './components/image/image';
import LoginForm from './components/loginForm/loginForm';
import Register from './components/register/register';
import Header from './components/header/header';

import logo from './assets/logo.svg'
import login from './assets/log-in.svg'

function App() {
  return (
    <div className='main'>
      <Image src={sideimage}/>
      <div className='login'>
        <div className='loginbox'>
          <img src={logo} alt="Logo Tiflux" id='logo' />
          <Header src={login}/>
          <LoginForm />
          <Register />
        </div>
      </div>
    </div>
  );
}

export default App;