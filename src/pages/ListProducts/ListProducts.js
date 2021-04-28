import React, { useEffect, useState } from 'react';

import Modal from '../../components/Modal';
import DescriptionFood from '../DescriptionFood';
import SubheadingText from '../../components/Typografy/Subheading';
import ListProductsFeatured from '../../components/ListProductsFeatured';

import { useBurger } from '../../store/BurgerStore';

import { BoxFeatured } from './style';

const ListProducts = ({ type, service }) => {
  const { products, setProducts } = useBurger();

  const [product, setProduct] = useState({ id: '', type: '' });
  const [show, showModal] = useState(false);

  const loadList = async () => {
    const response = await service();

    setProducts(type, response.data[type].result);
  };

  const handleClickModal = (item) => {
    showModal(true);
    setProduct({ id: item.id, type, item });
  };

  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('type ::::::', products[type]);

  return (
    <BoxFeatured>
      <SubheadingText text={`sabores ${type}`} />

      <ListProductsFeatured list={products[type]} onHandler={handleClickModal} />

      <Modal onClose={() => showModal(false)} show={show}>
        <div className="modal" id="modal">
          <DescriptionFood product={product} id={product.id} type={product.type} onHandler={() => showModal(false)} />
        </div>
      </Modal>
    </BoxFeatured>
  );
};

export default ListProducts;
