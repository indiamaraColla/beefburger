import React, { useEffect, useState } from 'react';

import Modal from '../../components/Modal';
import DescriptionFood from '../DescriptionFood';

import pizzaService from '../../services/pizzaService';
import { useBurger } from '../../store/BurgerStore';

import { BoxFeatured, Description, DescriptionMenu, BoxData } from './style';

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
      <h3>sabores</h3>
      <Description>
        {products.pizza.map((item, index) => {
          return (
            <DescriptionMenu key={index}>
              <BoxData>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <span>{item.description}</span>
                  <h4>R$ {item.price},00</h4>
                </div>
              </BoxData>
              <button onClick={() => handleClickModal(item)}>adicionar ao ticket</button>
            </DescriptionMenu>
          );
        })}
      </Description>
      <Modal onClose={() => showModal(false)} show={show}>
        <div className="modal" id="modal">
          <DescriptionFood product={product} id={product.id} type={product.type} onHandler={() => showModal(false)} />
        </div>
      </Modal>
    </BoxFeatured>
  );
};
export default ListPizza;
