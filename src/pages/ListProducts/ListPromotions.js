import React, { useState, useEffect } from 'react';

import promotionsService from '../../services/promotionsService';
import Modal from '../../components/Modal';
import DescriptionFood from '../DescriptionFood';
import SubheadingText from '../../components/Typografy/Subheading';
import Image from '../../components/Image';

import { BoxFeatured, BoxListPromotions, Menu, Description } from './style.js';

const ListPromotions = () => {
  const [list, setList] = useState([]);

  const [show, showModal] = useState(false);
  const [product, setProduct] = useState({ id: '', type: '' });

  const fetchApi = async () => {
    const response = await promotionsService();
    setList(response.data.promotions.result);
  };

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = (item) => {
    showModal(true);
    setProduct({ id: item.id, type: 'promotions', item });
  };

  return (
    <BoxFeatured>
      <SubheadingText text="promoções" />
      <BoxListPromotions>
        {list.map((item, index) => {
          return (
            <Menu key={index} onClick={() => handleOpenModal(item)}>
              <Image src={item.image} alt={item.title} />

              <div>
                <SubheadingText text={item.title} primary />
                <Description>{item.description}</Description>
                <SubheadingText text={`R$ ${item.price},00`} primary />
              </div>
            </Menu>
          );
        })}
      </BoxListPromotions>

      <Modal onClose={() => showModal(false)} show={show}>
        <div className="modal" id="modal">
          <DescriptionFood product={product} id={product.id} type={product.type} onHandler={() => showModal(false)} />
        </div>
      </Modal>
    </BoxFeatured>
  );
};
export default ListPromotions;
