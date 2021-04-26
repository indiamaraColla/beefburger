import React from 'react';
import { Button as Btn } from './style';

const BtnDarkRed = ({ text = 'Continuar', onClick, disabled, ...rest }) => {
  return (
    <Btn type="submit" onClick={onClick} disabled={disabled} {...rest}>
      {text}
    </Btn>
  );
};
export default BtnDarkRed;
