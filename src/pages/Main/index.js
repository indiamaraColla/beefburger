import React from 'react';
import { useHistory } from 'react-router-dom';

import { Menu, Logo, Button } from './style';

import BtnDarkBlue from '../../components/Button/BtnDarkBlue';

import burger from '../../img/burger.jpg';

const Main = () => {
  let history = useHistory();

  const handleClickAsk = () => {
    history.push('/signin');
  };

  return (
    <Menu>
      <Logo>
        <div>
          <img src={burger} alt="burger" />
        </div>
        <div>
          <span>
            Beef <strong>Burger</strong>
          </span>
        </div>
      </Logo>
      <span>
        Deu fome? <strong>Sem problema é só pedir...</strong>
      </span>
      <Button>
        <BtnDarkBlue onClick={handleClickAsk} outline text="Pedir" />
      </Button>
    </Menu>
  );
};
export default Main;
