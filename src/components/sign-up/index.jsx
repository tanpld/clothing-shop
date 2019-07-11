import React from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import './styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      createUserProfileDocument(user, { displayName });

      e.target.reset(); // clear form
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not account</h2>
        <span>Sign up with your email</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
            autoComplete="username"
            required
          />
          <FormInput
            type="text"
            name="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            autoComplete="username"
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            autoComplete="new-password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            autoComplete="new-password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
