import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import BtnBlueDark from '../../components/Button/BtnDarkBlue';
import Headline from '../../components/Typografy/Headline';
import Subheading from '../../components/Typografy/Subheading';

import { BoxDescription, BoxList, Box, ButtonAdd, CountButton, Description } from './style';
import { useBurger } from '../../store/BurgerStore';

const DescriptionFood = ({ type, id, product }) => {
  const { addCart } = useBurger();
  const [data, setData] = useState(product);
  const [count, setCount] = useState(1);
  const history = useHistory();

  const fetchApi = async () => {
    const response = await api.get(`/${type}/${id}`);
    setData(response.data);
  };

  const handleClickComprar = () => {
    addCart({ ...product, count });

    history.push(`/product/${type}/${id}/finish?count=${count}`);
  };

  useEffect(() => {
    if (type && id) {
      fetchApi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, id]);

  return (
    <BoxDescription>
      <BoxList>
        <Headline text="ticket" primary />
        <Box>
          <Subheading text={data.title} secondary />
          <Description>{data.description}</Description>
          <ButtonAdd>
            <CountButton>
              <button onClick={() => setCount(count - 1)}>-</button>
              <div className="text">{count}</div>
              <button onClick={() => setCount(count + 1)}>+</button>
            </CountButton>
            <Subheading text={`R$ ${data.price * count},00`} secondary />
          </ButtonAdd>

          <BtnBlueDark onClick={handleClickComprar} text="põe no carinho" blueDark />
        </Box>
      </BoxList>
    </BoxDescription>
  );
};
export default DescriptionFood;
