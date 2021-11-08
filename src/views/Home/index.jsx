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
  const options = Array.from(
    new Set(countries.map((option) => option.info[1].region)),
  ); //Array of objects of unique values
  const [filter, setFilter] = useState('');
  const [optionValue, setOptionValue] = useState(null);
  console.log(options);

  useEffect(() => {
    const handleFetchCountries = async () => {
      try {
        const response = await fetchCountries();
        const normalizedData = normalizeCountriesCard(
          response.data.slice(0, 8),
        );
        setCountries(normalizedData);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleFetchCountries();
  }, []);

  useEffect(() => {
    const handleSearchCountries = async () => {
      try {
        const response = await fetchCountries();
        const normalizedData = normalizeCountriesCard(response.data);
        const newFilter = normalizedData.filter((value) => {
          return value.title.toLowerCase().includes(query.toLowerCase());
        });
        if (newFilter != 0) setCountries(newFilter);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleSearchCountries();
  }, [query]);

  // useEffect(() => {
  //   const handleFilterCountries = async () => {
  //     try {
  //       const response = await fetchCountries();
  //       const normalizedData = normalizeCountriesCard(response.data);
  //       const newFilter = normalizedData.filter((value) => {
  //         return value.title.toLowerCase().includes(query.toLowerCase());
  //       });
  //       if (newFilter != 0) setCountries(newFilter);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   handleFilterCountries();
  // }, [filter]);

  if (!countries?.length) return <></>;

  return (
    <Page>
      <PageTop>
        <div className='search'>
          <SearchBar
            prompt='Search for a country…'
            data={countries}
            getQuery={(q) => setQuery(q)}
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
        {countries.map((item) => (
          <Card item={item} key={item.id} className='card' />
        ))}
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
