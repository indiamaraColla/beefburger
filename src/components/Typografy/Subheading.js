import React from 'react';
import { SubheadingText } from './styles';

const Subheading = ({ text, primary, secondary }) => {
  return (
    <SubheadingText primary={primary} secondary={secondary}>
      {text}
    </SubheadingText>
  );
};

export default Subheading;
