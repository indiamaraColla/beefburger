import React, { useState, useEffect } from 'react';

import promotionsService from '../../services/promotionsService';
import Modal from '../../components/Modal';
import DescriptionFood from '../DescriptionFood';

import { BoxPromotion, BoxList, Box } from './style';

const ListPizza = () => {
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

  function handleOpenModal(item) {
    showModal(true);
    setProduct({ id: item.id, type: 'promotions', item });
  }

  return (
    <>
      <BoxPromotion>
        <h3>promoções</h3>
        <BoxList>
          {list.map((item, index) => {
            return (
              <div key={index}>
                <Box onClick={() => handleOpenModal(item)}>
                  <div>
                    <img src={item.image} alt="product" />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                    <h4>R$ {item.price},00</h4>
                  </div>
                </Box>
              </div>
            );
          })}
        </BoxList>
      </BoxPromotion>

      <Modal onClose={() => showModal(false)} show={show}>
        <div className="modal" id="modal">
          <DescriptionFood product={product} id={product.id} type={product.type} onHandler={() => showModal(false)} />
        </div>
      </Modal>
    </>
  );
};
export default ListPizza;
