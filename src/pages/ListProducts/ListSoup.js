import React from 'react';

import soupService from '../../services/soupService';
import ListProducts from './ListProducts';

const ListSoup = () => {
  return <ListProducts type="soup" service={soupService} />;
};

export default ListSoup;
