import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';

const SearchBar = () => {
  return (
    <Search>
      <Icon as={GrSearch} />
      <input type="text" placeholder="Search for a country…" />
    </Search>
  );
};

const Search = styled.div(
  ({ theme }) => `
    width: 100%;
    height: 48px;
    margin-top: 40px;
    padding: 12px 16px;
    border: 1px solid ${theme.colors.outline};
    background-color: ${theme.colors.elements};
    display: flex;
    align-items: center;

    input {
      color: ${theme.colors.inputText};
    }
`,
);

const Icon = styled.svg`
  margin-right: 16px;

  path {
    stroke: ${({ theme }) => theme.colors.text};
  }
`;

export default SearchBar;
