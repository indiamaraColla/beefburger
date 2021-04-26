import React from 'react';

import { Logo } from './style';
import burgerAcebolado from '../../img/burgeracebolado.png';

const TitleLogo = () => {
  return (
    <Logo href="/home">
      <img src={burgerAcebolado} alt="logo" />
      <span>
        Beef <strong>Burger</strong>
      </span>
    </Logo>
  );
};
export default TitleLogo;
