import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...rest }) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
