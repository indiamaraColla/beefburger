import api from './api';

const signupService = async (payload) => {
  return await api.post('/signup', payload);
};

export default signupService;
