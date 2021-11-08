import { api } from '../provider/api';

export const fetchCountries = () => api.get('/countries');
