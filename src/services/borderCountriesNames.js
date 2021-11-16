import { api } from '../provider/api';

export const fetchBorderCountries = () => api.get('/countries_names');
