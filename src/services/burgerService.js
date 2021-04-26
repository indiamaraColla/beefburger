import api from './api';

const burgerService = async () => {
  return await api.get('/burger');
};

export default burgerService;
