import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';

import './SignIn.styles.scss';

export default class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        console.log('signed in');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
          <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={this.handleGoogleSignIn} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
