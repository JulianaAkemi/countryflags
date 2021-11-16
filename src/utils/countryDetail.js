export const normalizeCountryDetails = (countriesList) =>
  countriesList.map((country) => {
    let item = {
      image: country.flag,
      title: country.name,
      details: [
        { population: country.population },
        { region: country.continent },
        { capital: country.capital },
        { 'Top Love Domain': country.tld },
        { currencies: country.currency_name },
        { languages: country.languages },
      ],
      'Border Countries': country.neighbours,
    };
    return item;
  });
