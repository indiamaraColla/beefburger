import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://private-577531-beefburger.apiary-mock.com',
  timeout: 20000,
});
export default instance;
