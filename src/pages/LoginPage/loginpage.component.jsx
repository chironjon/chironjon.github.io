import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './loginpage.styles.scss';

const LoginPage = () => (
  <div className='login-page'>
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;