import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';
import { fetchCountries } from '../../services/countries';
import { normalizeCountriesCard } from '../../utils/countriesCard';
import ReactPaginate from 'react-paginate';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [searchedCountries, setSearchedCountries] = useState('');
  const options = Array.from(
    new Set(countries.map((option) => option.info[1].region)),
  );
  const [filter, setFilter] = useState('');
  const [optionValue, setOptionValue] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);
  const cardsPerPage = 8;
  const pagesVisited = pageNumber * cardsPerPage;
  const pageCount = Math.ceil(searchedCountries.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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

  useEffect(() => {
    if (query) {
      const searchedData = countries.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setSearchedCountries(searchedData);
    }
  }, [query]);

  useEffect(() => {
    if (filter) {
      const filteredData = countries.filter((item) =>
        item.info[1].region.includes(filter),
      );
      setSearchedCountries(filteredData);
    }
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
        {!!searchedCountries?.length ? (
          searchedCountries
            .slice(pagesVisited, pagesVisited + cardsPerPage)
            .map((item) => <Card item={item} key={item.id} className='card' />)
        ) : (
          <div>No matches</div>
        )}
      </CardsGrid>
      <div className='page-count'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </Page>
  );
};

const Page = styled.div`
  margin-bottom: 58px;

  .paginationBttns {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 15px;
  }

  .paginationBttns a {
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.text};
    padding: 3px 15px;
  }

  .paginationActive a,
  .paginationBttns a:hover {
    background-color: ${({ theme }) => theme.colors.elements};
    border: 3px solid ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  .paginationDisabled a {
    color: ${({ theme }) => theme.colors.outline};
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.outline};

    &:hover {
      pointer-events: none;
    }
  }

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
      width: 327px;
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
