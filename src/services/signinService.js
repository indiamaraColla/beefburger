import api from './api';

const signupService = async (payload) => {
  return await api.post('/signin', payload);
};

export default signupService;
