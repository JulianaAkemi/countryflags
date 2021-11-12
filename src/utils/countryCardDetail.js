export const normalizeCountryCardDetail = (countriesList) => {
  countriesList.map((country) => {
    let item = {
      image: country.flag,
      title: country.name,
      population: country.population,
      region: country.continent,
      capital: country.capital,
      top_love_domain: country.tld,
      currencies: country.currency_name,
      languages: country.languages,
      border: country.neighbours,
      id: country.geoname_id,
    };
    return item;
  });
};
