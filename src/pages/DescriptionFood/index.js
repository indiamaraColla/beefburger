import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import BoxContent from './content';
import { Menu, MenuDescription } from './style';
import BtnOutline from '../../components/Button/BtnDarkBlue';

const DescriptionFood = (props) => {
  const history = useHistory();
  let { type, id } = useParams();

  function handleClickVoltar() {
    if (props.onHandler) {
      props.onHandler();
    } else {
      history.goBack();
    }
  }

  if (!type && !id) {
    id = props.id;
    type = props.type;
  }

  return (
    <Menu>
      <MenuDescription>
        <BtnOutline onClick={handleClickVoltar} outline />
        <BoxContent type={type} id={id} product={props.product.item} />
      </MenuDescription>
    </Menu>
  );
};
export default DescriptionFood;
