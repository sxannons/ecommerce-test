import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUpStart } from '../../store/user/userActions';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { SignUpContainer, SignUpTitle } from './SignUpForm.styles';

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("passwords don't match");

    dispatch(signUpStart({ email, password, displayName }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle> I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display name" required />
        <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
        <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm password" required />

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
