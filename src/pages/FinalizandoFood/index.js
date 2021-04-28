import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useBurger } from '../../store/BurgerStore';

import Modal from '../../components/Modal';
import BtnBlueDark from '../../components/Button/BtnDarkBlue';
import BtnOutline from '../../components/Button/BtnDarkBlue';
import Headline from '../../components/Typografy/Headline';
import Subheading from '../../components/Typografy/Subheading';

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
  const { cardItems, removeCart } = useBurger();
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

  function onCloseOk(id) {
    removeCart(id);
  }

  useEffect(() => {
    if (cardItems.length === 0) {
      history.push('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardItems]);

  return (
    <Menu>
      <MenuDescription>
        <BtnOutline onClick={handleClickBack} outline />

        <BoxDescription>
          <Headline text="seu pedido" primary />

          <div>
            {cardItems.map((data, index) => (
              <BoxList key={index}>
                <div>
                  <Subheading text={data.title} secondary />

                  <RemoverLixeira>
                    <span>{data.description}</span>
                    <div>
                      <img src={Remover} onClick={() => onCloseOk(data.id)} alt="remover" />
                    </div>
                  </RemoverLixeira>
                </div>
                <TotalPrice>
                  <p style={{ color: '#de080d' }}>subtotal</p>
                  <Subheading text={`R$ ${data.price * data.count},00`} secondary />
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
            <Headline text="finalizando pedido" primary />

            <BoxList>
              <Box>
                <div>
                  <Subheading text="endereço de retirada" secondary />
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
                <p style={{ color: '#de080d' }}>total</p>
                <Subheading text={`R$ ${total},00`} secondary />
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
          <Subheading text="acabei" />
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
