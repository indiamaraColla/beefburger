import React, { useState, useEffect } from 'react';

import { useCart } from '../../store/CartStore';

import burger from '../../img/hamburger.png';
import pizza from '../../img/pizza.png';
import soup from '../../img/soup.png';
import snack from '../../img/snack.png';
import massas from '../../img/massas.png';

import ListHamburger from '../ListProducts/ListHamburger';
import ListPizza from '../ListProducts/ListPizza';
import ListSoup from '../ListProducts/ListSoup';
import ListPasta from '../ListProducts/ListPasta';
import ListSnack from '../ListProducts/ListSnack';
import Promotions from '../ListProducts/ListPromotions';

import Headline from '../../components/Typografy/Headline';
import Image from '../../components/ImageIcon';

import { Menu, DataList, Box, Footer } from './style';

const Home = () => {
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
    <>
      <Menu>
        <Headline text="o que vc deseja pra hoje?" />
        <DataList>
          <Box className={menu === 'burger' && 'active'} onClick={() => onHandleMenu('burger')}>
            <Image src={burger} alt="burger" />
            <p>Burger</p>
          </Box>
          <Box className={menu === 'pizza' && 'active'} onClick={() => onHandleMenu('pizza')}>
            <Image src={pizza} alt="pizza" />
            <p>Pizza</p>
          </Box>
          <Box className={menu === 'massas' && 'active'} onClick={() => onHandleMenu('massas')}>
            <Image src={massas} alt="massas" />
            <p>Massas</p>
          </Box>
          <Box className={menu === 'soup' && 'active'} onClick={() => onHandleMenu('soup')}>
            <Image src={soup} alt="soup" />
            <p>Soup</p>
          </Box>
          <Box className={menu === 'snack' && 'active'} onClick={() => onHandleMenu('snack')}>
            <Image src={snack} alt="snack" />
            <p>Lanches</p>
          </Box>
        </DataList>

        <Promotions />

        {menu === 'burger' && <ListHamburger />}
        {menu === 'massas' && <ListPasta />}
        {menu === 'pizza' && <ListPizza />}
        {menu === 'soup' && <ListSoup />}
        {menu === 'snack' && <ListSnack />}
      </Menu>
      <Footer>
        <p>Copyright © 2020 - Beef Burger. Todos os direitos reservados.</p>
      </Footer>
    </>
  );
};
export default Home;
