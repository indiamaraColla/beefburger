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
import SubheadingText from '../../components/Typografy/Subheading';

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
            <SubheadingText text="Burger" primary />
          </Box>
          <Box className={menu === 'pizza' && 'active'} onClick={() => onHandleMenu('pizza')}>
            <Image src={pizza} alt="pizza" />
            <SubheadingText text="Pizza" primary />
          </Box>
          <Box className={menu === 'massas' && 'active'} onClick={() => onHandleMenu('massas')}>
            <Image src={massas} alt="massas" />
            <SubheadingText text="Massas" primary />
          </Box>
          <Box className={menu === 'soup' && 'active'} onClick={() => onHandleMenu('soup')}>
            <Image src={soup} alt="soup" />
            <SubheadingText text="Soup" primary />
          </Box>
          <Box className={menu === 'snack' && 'active'} onClick={() => onHandleMenu('snack')}>
            <Image src={snack} alt="snack" />
            <SubheadingText text="Lanches" primary />
          </Box>
        </DataList>

        <Promotions />

        {menu === 'burger' && <ListHamburger />}
        {menu === 'massas' && <ListPasta />}
        {menu === 'pizza' && <ListPizza />}
        {menu === 'soup' && <ListSoup />}
        {menu === 'snack' && <ListSnack />}
      </Menu>
      <Footer>Copyright © 2020 - Beef Burger. Todos os direitos reservados.</Footer>
    </>
  );
};
export default Home;
