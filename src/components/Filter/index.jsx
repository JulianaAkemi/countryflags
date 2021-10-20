import styled from 'styled-components';
import { GrDown } from 'react-icons/gr';
import { useState } from 'react';
import { FormField } from '../Theme/Theme';

const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <Select>
      <Control onClick={() => setOpen((prev) => !prev)}>
        <p>Filter by Region</p>
        <Icon as={GrDown} className={`${open ? 'arrow-open' : null}`} />
      </Control>
      {open && (
        <Options>
          <p>Africa</p>
          <p>America</p>
          <p>Asia</p>
          <p>Europe</p>
          <p>Oceania</p>
        </Options>
      )}
    </Select>
  );
};

const Select = styled.div`
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  .arrow-open {
    transition: 0.3s all ease;
    transform: rotateZ(-180deg);
  }
`;

const Control = styled(FormField)(
  ({ theme }) => `
    font-size:  ${theme.fontSizes.md};
    font-weight: 600;
    padding: 17px 15px 17px 24px;
    justify-content: space-between;
`,
);

const Options = styled.div(
  ({ theme }) => `
  
    width: 100%;
    border: 1px solid ${theme.colors.outline};
    background-color: ${theme.colors.elements};
    color: ${theme.colors.inputText};
    font-size:  ${theme.fontSizes.md};
    font-weight: 400;

    p {
      padding: 6px 0 6px 24px;
    }

    p:hover {
      background: ${theme.colors.inputText};
      color: ${theme.colors.elements};
    }  
`,
);

const Icon = styled.svg`
  transition: 0.3s all ease;
  polyline {
    stroke: ${({ theme }) => theme.colors.text};
  }
`;

export default Filter;
