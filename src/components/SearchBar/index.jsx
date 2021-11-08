import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';
import { FormField } from '../FormField';
import { useState } from 'react';

const SearchBar = ({ prompt, data, getQuery }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };

  const onChange = (q) => {
    getQuery(q);
  };

  return (
    <StyledSearch>
      <Search>
        <Icon as={GrSearch} />
        <input
          type='text'
          placeholder={prompt}
          onChange={(handleFilter, (e) => onChange(e.target.value))}
        />
      </Search>
      {filteredData.lenght != 0 ? (
        <DataResult>
          {filteredData.slice(0, 15).map((value) => {
            return <a key={value.id}>{value.title}</a>;
          })}
        </DataResult>
      ) : (
        <></>
      )}
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  position: relative;
`;

const Search = styled(FormField)`
  padding: 12px 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

const Icon = styled.svg`
  margin-right: 16px;

  path {
    stroke: ${({ theme }) => theme.colors.text};
  }
`;

const DataResult = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.outline};
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.inputText};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 400;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  max-height: 200px;
  position: absolute;
  z-index: 2;

  a {
    width: 100%;
    height: 30px;
    padding: 6px 0 6px 24px;

    &:hover {
      background: ${({ theme }) => theme.colors.inputText};
      color: ${({ theme }) => theme.colors.elements};
      cursor: pointer;
    }
  }
`;

export default SearchBar;
