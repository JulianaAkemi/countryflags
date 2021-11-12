export const normalizeCountriesCard = (countriesList) => {
  countriesList.map((country) => {
    let item = {
      image: country.flag,
      title: country.name,
      info: [
        { population: country.population },
        { region: country.continent },
        { capital: country.capital },
      ],
      id: country.geoname_id,
    };
    return item;
  });
};
