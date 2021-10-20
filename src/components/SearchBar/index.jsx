import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';
import { FormField } from '../Theme/Theme';

const SearchBar = () => {
  return (
    <Search>
      <Icon as={GrSearch} />
      <input type='text' placeholder='Search for a country…' />
    </Search>
  );
};

const Search = styled(FormField)`
  padding: 12px 16px;
`;

const Icon = styled.svg`
  margin-right: 16px;

  path {
    stroke: ${({ theme }) => theme.colors.text};
  }
`;

export default SearchBar;
