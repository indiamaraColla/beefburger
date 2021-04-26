import api from './api';

const soupService = async () => {
  return await api.get('/soup');
};

export default soupService;
