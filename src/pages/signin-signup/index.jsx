import React from 'react';

import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

import './styles.scss';

const SignInSignUp = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
