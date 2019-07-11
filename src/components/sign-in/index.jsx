import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import './styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      form.reset();
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your emai and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            autoComplete="username"
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

export default SignIn;
