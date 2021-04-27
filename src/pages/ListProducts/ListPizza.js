import React, { useEffect, useState } from 'react';

import Modal from '../../components/Modal';
import DescriptionFood from '../DescriptionFood';
import SubheadingText from '../../components/Typografy/Subheading';
import Image from '../../components/Image';

import pizzaService from '../../services/pizzaService';
import { useBurger } from '../../store/BurgerStore';

import { BoxFeatured, BoxList, Menu, BoxData, Description, BoxButton } from './style';

const ListPizza = () => {
  const { products, setProducts } = useBurger();

  const [product, setProduct] = useState({ id: '', type: '' });
  const [show, showModal] = useState(false);

  const loadListPizza = async () => {
    const response = await pizzaService();
    setProducts('pizza', response.data.pizza.result);
  };

  function handleClickModal(item) {
    showModal(true);
    setProduct({ id: item.id, type: 'pizza', item });
  }

  useEffect(() => {
    loadListPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BoxFeatured>
      <SubheadingText text="sabores" />
      <BoxList>
        {products.pizza.map((item, index) => {
          return (
            <Menu key={index}>
              <BoxData>
                <Image src={item.image} alt={item.title} />

                <div>
                  <SubheadingText text={item.title} primary />
                  <Description>{item.description}</Description>
                  <SubheadingText text={`R$ ${item.price},00`} primary />
                </div>
              </BoxData>
              <BoxButton>
                <button onClick={() => handleClickModal(item)}>adicionar ao ticket</button>
              </BoxButton>
            </Menu>
          );
        })}
      </BoxList>
      <Modal onClose={() => showModal(false)} show={show}>
        <div className="modal" id="modal">
          <DescriptionFood product={product} id={product.id} type={product.type} onHandler={() => showModal(false)} />
        </div>
      </Modal>
    </BoxFeatured>
  );
};
export default ListPizza;
