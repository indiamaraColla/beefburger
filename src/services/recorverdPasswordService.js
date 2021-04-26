import api from './api';

const recorverdPasswordService = async (payload) => {
  return await api.post('/recorverd-password', payload);
};

export default recorverdPasswordService;
