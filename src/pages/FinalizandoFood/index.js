import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useBurger } from '../../store/BurgerStore';

import Modal from '../../components/Modal';
import BtnOutline from '../../components/Button/BtnDarkBlue';
import Subheading from '../../components/Typografy/Subheading';
import BtnBlueDark from '../../components/Button/BtnDarkBlue';

import CheckOrder from '../../components/OrderFinish/checkOrder';
import FinishOrder from '../../components/OrderFinish/finishOrder';

import { Menu, MenuDescription } from './style';

const FinalizandoFood = () => {
  const { cardItems, removeCart, setCartItems } = useBurger();
  const [show, showModal] = useState(false);
  const [finalizar, showFinish] = useState(false);

  const total = cardItems.reduce((total, { price, count }) => price * count + total, 0);

  const history = useHistory();

  const handleClickBack = () => {
    history.push('/home');
  };

  const handleClickFinish = () => {
    showModal(true);
  };

  const onCloseOk = (id) => {
    removeCart(id);
  };

  const onFinishOrder = () => {
    setCartItems('');
    history.push('/home');
  };

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

        <CheckOrder onCloseOk={onCloseOk} cardItems={cardItems} showFinish={showFinish} />

        {cardItems.length >= 1 && (
          <FinishOrder
            cardItems={cardItems}
            total={total}
            handleClickFinish={handleClickFinish}
            finalizar={finalizar}
          />
        )}
      </MenuDescription>

      <Modal onClose={() => showModal(false)} show={show} height="800px">
        <div className="modal" id="modal">
          <Subheading text="acabei" />
          <div className="content">pedido finalizado com sucesso...</div>
          <div className="actions">
            <BtnBlueDark onClick={onFinishOrder} text="OK" blueDark />
          </div>
        </div>
      </Modal>
    </Menu>
  );
};
export default FinalizandoFood;
