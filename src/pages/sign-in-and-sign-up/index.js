import React from 'react';
import SignInForm from '../../components/sign-in/SignIn';
import SignUpForm from '../../components/sign-up/SignUpForm';

import { SignIndAndSignUpContainer } from './SignInAndSignUp.styles';

const SignInAndSignUpPage = () => {
  return (
    <SignIndAndSignUpContainer>
      <SignInForm />
      <SignUpForm />
    </SignIndAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
