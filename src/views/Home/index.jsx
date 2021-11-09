import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';
import { fetchCountries } from '../../services/countries';
import { normalizeCountriesCard } from '../../utils/countriesCard';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
<<<<<<< HEAD
  const options = Array.from(
    new Set(countries.map((option) => option.info[1].region)),
  ); //Array of objects of unique values
  const [filter, setFilter] = useState('');
  const [optionValue, setOptionValue] = useState(null);
  console.log('Home options loading', options);
=======
  const [filteredCountries, setFilteredCountries] = useState('');
>>>>>>> 2b8719aa585779fa84b9e11d46d717189848e539

  useEffect(() => {
    const handleFetchCountries = async () => {
      try {
        const response = await fetchCountries();
        const normalizedData = normalizeCountriesCard(response.data);
        setCountries(normalizedData);
        setFilteredCountries(normalizedData);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleFetchCountries();
  }, []);

  useEffect(() => {
    if (query) {
      const filteredData = countries.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredCountries(filteredData);
    }
  }, [query]);

  useEffect(() => {
    const handleFilterCountries = async () => {
      try {
        const response = await fetchCountries();
        const normalizedData = normalizeCountriesCard(response.data);
        const newOption = normalizedData.filter((value) => {
          return value.info[1].region.includes(filter);
        });
        if (newOption != 0) setCountries(newOption);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleFilterCountries();
  }, [filter]);

  if (!countries?.length) return <></>;

  return (
    <Page>
      <PageTop>
        <div className='search'>
          <SearchBar
            prompt='Search for a country…'
            getQuery={(inputValue) => setQuery(inputValue)}
          />
        </div>
        <div className='filter'>
          <Filter
            prompt='Filter by Region'
            options={options}
            getFilter={(filter) => setFilter(filter)}
            optionValue={optionValue}
            onChange={(option) => setOptionValue(option)}
          />
        </div>
      </PageTop>
      <CardsGrid>
        {!!filteredCountries?.length ? (
          filteredCountries.map((item) => (
            <Card item={item} key={item.id} className='card' />
          ))
        ) : (
          <div>No matches</div>
        )}
      </CardsGrid>
    </Page>
  );
};

const Page = styled.div`
  margin-bottom: 58px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 80px;
  }
`;

const PageTop = styled.div`
  margin: 40px 0;

  .search {
    margin-bottom: 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;

    .search {
      width: 327px;
    }
    .filter {
      width: 242px;
    }
  }
`;

const CardsGrid = styled.div`
  .card {
    margin-bottom: 16px;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 0px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 303px 303px;
    column-gap: 16px;
    row-gap: 63px;
  }
`;

export default Home;
