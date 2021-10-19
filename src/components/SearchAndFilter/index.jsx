import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar';

const SearchAndFilter = () => {
  return (
    <StyledDiv>
      <SearchBar />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default SearchAndFilter;
