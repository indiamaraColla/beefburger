import React from 'react';

import Headline from '../Typografy/Headline';
import Subheading from '../Typografy/Subheading';
import BtnBlueDark from '../Button/BtnDarkBlue';
import theme from '../../constants/theme';
import BagFood from '../../img/bagFood.png';

import { BoxDescription, BoxList, Box, Adress, Button, TotalPrice } from './style';

const FinishOrder = ({ total, finalizar, handleClickFinish }) => {
  return (
    <>
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
              <p style={{ color: `${theme.darkRed}` }}>total</p>
              <Subheading text={`R$ ${total},00`} secondary />
            </TotalPrice>
          </BoxList>
          <Button>
            <BtnBlueDark onClick={handleClickFinish} blueDark text="pronto" />
          </Button>
        </BoxDescription>
      )}
    </>
  );
};

export default FinishOrder;
