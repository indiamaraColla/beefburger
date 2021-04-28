import React from 'react';
import ListProducts from './ListProducts';

import burgerService from '../../services/burgerService';

const ListHamburger = () => {
  return <ListProducts type="burger" service={burgerService} />;
};
export default ListHamburger;
