import api from './api';

const promotionsService = async () => {
  return await api.get('/promotions');
};

export default promotionsService;
