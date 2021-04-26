import React from 'react';
import { MdChevronLeft } from 'react-icons/md';
import { Button as Btn } from './style';

const BtnDarkBlue = ({ text = 'voltar', outline, blueDark, onClick, ...rest }) => {
  return (
    <Btn type="button" onClick={onClick} {...rest} outline={outline} blueDark={blueDark}>
      <MdChevronLeft size={30} color="#193B4B" />
      {text}
    </Btn>
  );
};
export default BtnDarkBlue;
