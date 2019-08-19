import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import './styles.scss';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      form.reset();
      setCredentials({ ...userCredentials, email: '', password: '' });
    } catch (error) {
      console.error(error);
      setCredentials({ ...userCredentials, error: error.message });
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your emai and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          autoComplete="username"
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          autoComplete="current-password"
          required
        />
        <div className="button-group">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
