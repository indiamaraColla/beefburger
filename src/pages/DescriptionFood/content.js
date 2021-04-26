import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import BtnBlueDark from '../../components/Button/BtnDarkBlue';

import { BoxDescription, BoxList, Box, ButtonAdd, CountButton } from './style';
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

  function handleClickComprar() {
    addCart({ ...product, count });

    history.push(`/product/${type}/${id}/finish?count=${count}`);
  }

  useEffect(() => {
    if (type && id) {
      fetchApi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, id]);

  return (
    <BoxDescription>
      <BoxList>
        <p>ticket</p>
        <Box>
          <div>
            <h4>{data.title} </h4>
            <span>{data.description}</span>
            <ButtonAdd>
              <CountButton>
                <button onClick={() => setCount(count - 1)}>-</button>
                <div className="text">{count}</div>
                <button onClick={() => setCount(count + 1)}>+</button>
              </CountButton>
              <h5>R$ {data.price * count},00</h5>
            </ButtonAdd>

            <BtnBlueDark onClick={handleClickComprar} text="põe no carinho" blueDark />
          </div>
        </Box>
      </BoxList>
    </BoxDescription>
  );
};
export default DescriptionFood;
