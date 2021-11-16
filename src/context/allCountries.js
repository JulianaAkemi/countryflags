import React, { createContext } from 'react';
import { useState } from 'react';

const CountriesContext = createContext();

export default function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
}
