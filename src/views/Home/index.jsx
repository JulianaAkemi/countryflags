import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';
import { fetchCountries } from '../../services/countries';
import { normalizeCountriesCard } from '../../utils/countriesCard';
import ReactPaginate from 'react-paginate';
import Items from './Items';

const cardsPerPage = 8;

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [searchedCountries, setSearchedCountries] = useState('');
  const options = Array.from(
    new Set(countries.map((option) => option.info[1].region)),
  );
  const [filter, setFilter] = useState('');
  const [optionValue, setOptionValue] = useState(null);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [forceFirstPage, setForceFirstPage] = useState(null);

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
      setForceFirstPage(0);
      setItemOffset(0);
    }
  }, [query]);

  useEffect(() => {
    if (filter) {
      const filteredData = countries.filter((item) =>
        item.info[1].region.includes(filter),
      );
      setSearchedCountries(filteredData);
      setForceFirstPage(0);
      setItemOffset(0);
    }
  }, [filter]);

  useEffect(() => {
    const endOffset = itemOffset + cardsPerPage;
    setCurrentItems(searchedCountries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchedCountries.length / cardsPerPage));
  }, [itemOffset, cardsPerPage, searchedCountries]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * cardsPerPage) % searchedCountries.length;
    setItemOffset(newOffset);
  };

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
        <Items currentItems={currentItems} />
      </CardsGrid>
      <div className='page-count'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          forcePage={forceFirstPage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
          renderOnZeroPageCount={null}
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
  }

  .paginationBttns a {
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.text};
    padding: 3px 15px;
    margin: 0 8px;
  }

  .paginationActive a,
  .paginationBttns a:hover {
    color: ${({ theme }) => theme.colors.elements};
    background-color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  .paginationDisabled a {
    color: ${({ theme }) => theme.colors.outline};
    border: 1px solid ${({ theme }) => theme.colors.outline};
    pointer-events: none;
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
