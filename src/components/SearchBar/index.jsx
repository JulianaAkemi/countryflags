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
    width: 343px;
    height: 48px;
    margin-top: 40px;
    padding: 13px 15px;
    border: 1px solid ${theme.colors.outline};
    background-color: ${theme.colors.elements};
    display: flex;
    align-items: center;

    input {
      color: ${theme.colors.inputText};
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 327px;
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
