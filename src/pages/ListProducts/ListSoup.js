import React, { useState, useEffect } from 'react';

import soupService from '../../services/soupService';
import { useBurger } from '../../store/BurgerStore';
import Modal from '../../components/Modal';
import DescriptionFood from '../DescriptionFood';
import SubheadingText from '../../components/Typografy/Subheading';
import Image from '../../components/Image';

import { BoxFeatured, BoxList, Menu, BoxData, Description, BoxButton } from './style.js';

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
    <BoxFeatured>
      <SubheadingText text="sabores" />
      <BoxList>
        {products.soup.map((item, index) => {
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
                <button onClick={() => handleOpenModal(item)}>adicionar ao ticket</button>
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
export default ListSoup;
