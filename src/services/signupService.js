import { routes } from '../constants';
import api from './api';

const signupService = async (payload) => {
  return await api.post(`${routes.signup}`, payload);
};

export default signupService;
