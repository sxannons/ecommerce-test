import React, { Component } from 'react';

import { auth, createUserProfileDocument, createFirebaseUserWithEmail } from '../../firebase/firebase.utils';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { SignUpContainer, SignUpTitle } from './SignUpForm.styles';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.state = this.initialState;
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) return alert("passwords don't match");

    try {
      const { user } = await createFirebaseUserWithEmail(auth, email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState(this.initialState);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle> I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display name" required />
          <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required />
          <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required />
          <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm password" required />

          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}
