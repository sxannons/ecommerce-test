import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../store/user/userActions';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { SignUpContainer, SignUpTitle } from './SignUpForm.styles';

class SignUpForm extends Component {
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
    const { signUpStart } = this.props;

    if (password !== confirmPassword) return alert("passwords don't match");

    signUpStart({ email, password, displayName });
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

const matchDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, matchDispatchToProps)(SignUpForm);
