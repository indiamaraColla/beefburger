import React from 'react';
import { SubheadingText } from './styles';

const Subheading = ({ text, primary }) => {
  return <SubheadingText primary={primary}>{text}</SubheadingText>;
};

export default Subheading;
