import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../store/user/userActions';

import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';

import { ButtonsBarContainer, SignInContainer, SignInTitle } from './SignIn.styles';

const SignInForm = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(emailSignInStart(userCredentials));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleGoogleSignIn = (e) => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={email} handleChange={handleChange} label="Email" required />
        <FormInput name="password" type="password" value={password} handleChange={handleChange} label="Password" required />

        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={handleGoogleSignIn} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
