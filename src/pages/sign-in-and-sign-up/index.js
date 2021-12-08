import React from 'react';
import SignInForm from '../../components/sign-in/SignIn';

import './signInAndSignUp.styles.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className="sing-in-and-sign-up">
      SIGN IN
      <SignInForm />
    </div>
  );
};

export default SignInAndSignUpPage;
