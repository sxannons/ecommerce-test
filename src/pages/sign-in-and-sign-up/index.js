import React from 'react';
import SignInForm from '../../components/sign-in/SignIn';
import SignUpForm from '../../components/sign-up/SignUpForm';

import './signInAndSignUp.styles.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className="sing-in-and-sign-up">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignInAndSignUpPage;
