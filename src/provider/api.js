import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wtt-countries.herokuapp.com',
});
