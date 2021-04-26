import React, { useEffect, useState } from 'react';

import { BoxFeatured, Description, DescriptionMenu, BoxData } from './style';

import Modal from '../../components/Modal';
import DescriptionFood from '../DescriptionFood';
import burgerService from '../../services/burgerService';
import { useBurger } from '../../store/BurgerStore';

const ListHamburger = () => {
  const { products, setProducts } = useBurger();

  const [product, setProduct] = useState({ id: '', type: '' });
  const [show, showModal] = useState(false);

  const fetchApi = async () => {
    const response = await burgerService();
    setProducts('burger', response.data.burger.result);
  };
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClickModal(item) {
    showModal(true);
    setProduct({ id: item.id, type: 'burger', item });
  }

  return (
    <BoxFeatured>
      <h3>sabores</h3>
      <Description>
        {products.burger.map((item, index) => {
          return (
            <DescriptionMenu key={index}>
              <BoxData>
                <div>
                  <img src={item.image} alt={item.title} />
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
export default ListHamburger;
