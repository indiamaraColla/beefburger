import React from 'react';
import { HeadlineText } from './styles';

const Headline = ({ text, primary }) => {
  return <HeadlineText primary={primary}>{text}</HeadlineText>;
};

export default Headline;
