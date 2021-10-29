import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';

const Home = ({ data }) => {
  if (!data?.length) return <></>;
  return (
    <Page>
      <PageTop>
        <div className='search'>
          <SearchBar />
        </div>
        <div className='filter'>
          <Filter prompt='Filter by Region' />
        </div>
      </PageTop>
      <CardsGrid>
        {data.map((item) => (
          <Card item={item} key={item.name} />
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

    &:hover {
      cursor: pointer;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 0px;

      img {
        height: 161px;
      }
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
