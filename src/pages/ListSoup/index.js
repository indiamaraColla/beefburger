import React, { useState, useEffect } from 'react';

import soupService from '../../services/soupService';
import { useBurger } from '../../store/BurgerStore';
import Modal from '../../components/Modal';
import DescriptionFood from '../DescriptionFood';

import { BoxFeatured, Description, DescriptionMenu, BoxData } from './style';

const ListSoup = () => {
  const { products, setProducts } = useBurger();

  const [show, showModal] = useState(false);
  const [product, setProduct] = useState({ id: '', type: '' });

  const loadListSoup = async () => {
    const response = await soupService();

    setProducts('soup', response.data.soup.result);
  };

  function handleOpenModal(item) {
    showModal(true);
    setProduct({ id: item.id, type: 'soup', item });
  }

  useEffect(() => {
    loadListSoup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <BoxFeatured>
        <h3>sabores</h3>
        <Description>
          {products.soup.map((item, index) => {
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
                <button onClick={() => handleOpenModal(item)}>adicionar ao ticket</button>
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
    </div>
  );
};
export default ListSoup;
