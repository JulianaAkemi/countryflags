import { useEffect } from 'react';
import { fetchCountries } from '../services/countries';
import { normalizeCountriesCard } from '../utils/countriesCard';

function useGetCountries(setCountries, setSearchedCountries) {
  useEffect(() => {
    const handleFetchCountries = async () => {
      try {
        const response = await fetchCountries();
        const normalizedData = normalizeCountriesCard(response.data);
        setCountries(normalizedData);
        setSearchedCountries(normalizedData);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleFetchCountries();
  }, []);
}

export default useGetCountries;
