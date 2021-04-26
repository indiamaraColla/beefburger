import React from 'react';
import { TextField } from './style';

const Input = ({ placeholder, type = 'text', value, onChange, name }) => {
  return <TextField placeholder={placeholder} type={type} value={value} onChange={onChange} name={name} />;
};
export default Input;
