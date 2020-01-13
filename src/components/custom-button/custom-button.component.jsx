import React from 'react';

import './custom-buttom.styles.scss';
import { render } from 'react-dom';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
 
  
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
