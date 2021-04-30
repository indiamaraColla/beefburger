import React from 'react';

import Remover from '../../img/trashCan.png';
import Headline from '../Typografy/Headline';
import Subheading from '../Typografy/Subheading';
import BtnBlueDark from '../Button/BtnDarkBlue';

import { BoxDescription, BoxList, RemoverLixeira, Button, TotalPrice } from './style';

const CheckOrder = ({ onCloseOk, cardItems, showFinish }) => {
  return (
    <BoxDescription>
      <Headline text="seu pedido" primary />

      {cardItems.length >= 1 ? (
        <>
          {cardItems.map((data, index) => (
            <BoxList key={index}>
              <Subheading text={data.title} secondary />

              <RemoverLixeira>
                <span>{data.description}</span>
                <img src={Remover} onClick={() => onCloseOk(data.id)} alt="remover" />
              </RemoverLixeira>
              <TotalPrice>
                <p style={{ color: '#de080d' }}>subtotal</p>
                <Subheading text={`R$ ${data.price * data.count},00`} secondary />
              </TotalPrice>
            </BoxList>
          ))}
        </>
      ) : (
        'adicione um produto ao seu carrinho para finalizar a compra...'
      )}

      <Button className="hidden">
        <BtnBlueDark onClick={() => showFinish(true)} text="acabei" blueDark />
      </Button>
    </BoxDescription>
  );
};

export default CheckOrder;
