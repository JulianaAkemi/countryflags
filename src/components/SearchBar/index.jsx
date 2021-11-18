import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';
import { FormField } from '../FormField';

const SearchBar = ({ prompt, getQuery }) => {
  const onChange = (inputValue) => {
    getQuery(inputValue);
  };

  return (
    <StyledSearch>
      <Search>
        <Icon as={GrSearch} />
        <input
          type='text'
          placeholder={prompt}
          onChange={(e) => onChange(e.target.value)}
        />
      </Search>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  position: relative;
`;

const Search = styled(FormField)`
  padding: 12px 16px;

  input {
    color: ${({ theme }) => theme.colors.inputText};
    width: 100%;
  }

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

export default SearchBar;
