import api from './api';

const pizzaService = async () => {
  return await api.get('/pizza');
};

export default pizzaService;
