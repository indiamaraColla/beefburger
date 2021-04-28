import React from 'react';

import pizzaService from '../../services/pizzaService';

import ListProducts from './ListProducts';

const ListPizza = () => {
  return <ListProducts type="pizza" service={pizzaService} />;
};

export default ListPizza;
