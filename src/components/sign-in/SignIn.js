import React, { Component } from 'react';
import { connect } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../store/user/userActions';

import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';

import { ButtonsBarContainer, SignInContainer, SignInTitle } from './SignIn.styles';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
          <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />

          <ButtonsBarContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignInForm);
