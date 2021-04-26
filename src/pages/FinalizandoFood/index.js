import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useBurger } from '../../store/BurgerStore';

import Modal from '../../components/Modal';
import BtnBlueDark from '../../components/Button/BtnDarkBlue';
import BtnOutline from '../../components/Button/BtnDarkBlue';

import Remover from '../../img/trashCan.png';
import BagFood from '../../img/bagFood.png';

import {
  Menu,
  MenuDescription,
  BoxDescription,
  BoxList,
  Box,
  RemoverLixeira,
  Adress,
  Button,
  TotalPrice,
} from './style';

const FinalizandoFood = () => {
  const { cardItems } = useBurger();
  const [show, showModal] = useState(false);
  const [finalizar, showFinish] = useState(false);

  const total = cardItems.reduce((total, { price, count }) => price * count + total, 0);

  const history = useHistory();

  function handleClickBack() {
    history.push('/home');
  }

  function handleClickFinish() {
    showModal(true);
  }

  function onCloseOk() {
    history.push('/home');
  }

  return (
    <Menu>
      <MenuDescription>
        <BtnOutline onClick={handleClickBack} outline />

        <BoxDescription>
          <h3>seu pedido</h3>

          <div>
            {cardItems.map((data) => (
              <BoxList>
                <div>
                  <h4>{data.title} </h4>
                  <RemoverLixeira>
                    <span>{data.description}</span>
                    <div>
                      <img src={Remover} onClick={onCloseOk} alt="remover" />
                    </div>
                  </RemoverLixeira>
                </div>
                <TotalPrice>
                  <p>subtotal</p>
                  <h5>R$ {data.price * data.count},00</h5>
                </TotalPrice>
              </BoxList>
            ))}
          </div>

          <Button className="hidden">
            <BtnBlueDark onClick={() => showFinish(true)} text="acabei" blueDark />
          </Button>
        </BoxDescription>

        {finalizar && (
          <BoxDescription>
            <h3>finalizando pedido</h3>
            <BoxList>
              <Box>
                <div>
                  <h4>endereço de retirada </h4>
                  <Adress>
                    <img src={BagFood} alt="bagfood" />
                    <div>
                      <p>Rua São Cristolvon 950 Centro - Blumenau</p>
                      <p> (47) 9924-4329</p>
                      <p> 30-40 minutos</p>
                    </div>
                  </Adress>
                </div>
              </Box>
              <TotalPrice>
                <p>total</p>
                <h5>R$ {total},00</h5>
              </TotalPrice>
            </BoxList>
            <Button>
              <BtnBlueDark onClick={handleClickFinish} blueDark text="pronto" />
            </Button>
          </BoxDescription>
        )}
      </MenuDescription>

      <Modal onClose={() => showModal(false)} show={show} height="800px">
        <div className="modal" id="modal">
          <h2>acabei</h2>
          <div className="content">pedido finalizado com sucesso...</div>
          <div className="actions">
            <button className="toggle-button" onClick={onCloseOk}>
              OK
            </button>
          </div>
        </div>
      </Modal>
    </Menu>
  );
};
export default FinalizandoFood;
