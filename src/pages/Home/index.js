import React, { useState, useEffect } from 'react';

import { Menu, Container, DataMenu, DataList, Box, BoxFeatured, Footer } from './style';

import { useCart } from '../../store/CartStore';

import burger from '../../img/hamburger.png';
import pizza from '../../img/pizza.png';
import soup from '../../img/soup.png';
import snack from '../../img/snack.png';
import massas from '../../img/massas.png';

import ListHamburger from '../ListHamburger';
import ListPizza from '../ListPizza';
import ListSoup from '../ListSoup';
import ListPasta from '../ListPasta';
import ListSnack from '../ListSnack';
import Promotions from '../Promotions';

function Home() {
  const { cart, setCart } = useCart();
  const [menu, setMenu] = useState('burger');
  const onHandleMenu = (menu) => {
    setMenu(menu);
  };

  useEffect(() => {
    const products = [...cart.products, { id: 1, price: 3 }];

    setCart({ products });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Menu>
        <Container>
          <div>
            <DataMenu>
              <h3>o que vc deseja pra hoje?</h3>
              <DataList>
                <Box className={menu === 'burger' && 'active'} onClick={() => onHandleMenu('burger')}>
                  <div>
                    <img src={burger} alt="burger" />
                  </div>
                  <div>
                    <p>Burger</p>
                  </div>
                </Box>
                <Box className={menu === 'pizza' && 'active'} onClick={() => onHandleMenu('pizza')}>
                  <img src={pizza} alt="pizza" />
                  <p>Pizza</p>
                </Box>
                <Box className={menu === 'massas' && 'active'} onClick={() => onHandleMenu('massas')}>
                  <img src={massas} alt="massas" />
                  <p>Massas</p>
                </Box>
                <Box className={menu === 'soup' && 'active'} onClick={() => onHandleMenu('soup')}>
                  <img src={soup} alt="soup" />
                  <p>Soup</p>
                </Box>
                <Box className={menu === 'snack' && 'active'} onClick={() => onHandleMenu('snack')}>
                  <img src={snack} alt="snack" />
                  <p>Lanches</p>
                </Box>
              </DataList>
            </DataMenu>

            <Promotions />

            <BoxFeatured>
              {menu === 'burger' && <ListHamburger />}
              {menu === 'massas' && <ListPasta />}
              {menu === 'pizza' && <ListPizza />}
              {menu === 'soup' && <ListSoup />}
              {menu === 'snack' && <ListSnack />}
            </BoxFeatured>
          </div>
        </Container>
      </Menu>
      <Footer>
        <p>Copyright © 2020 - Beef Burger. Todos os direitos reservados.</p>
      </Footer>
    </div>
  );
}
export default Home;
