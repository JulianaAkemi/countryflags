import styled from 'styled-components';
import { GrDown } from 'react-icons/gr';
import { useState } from 'react';
import { FormField } from '../Theme/Theme';

const Filter = ({ prompt }) => {
  const [open, setOpen] = useState(false);

  return (
    <Select>
      <Control onClick={() => setOpen((prev) => !prev)}>
        <p>{prompt}</p>
        <Icon as={GrDown} className={`${open ? 'arrow-open' : null}`} />
      </Control>
      <Options className={`${open ? 'options-open' : null}`}>
        <ul>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
        </ul>
      </Options>
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
  .options-open {
    display: inherit;
    transform-origin: top center;
    animation: scaleY 300ms ease-in-out forwards;

    @keyframes scaleY {
      0% {
        opacity: 0;
        transform: scaleY(0);
      }

      50% {
        transform: scaleY(0.5);
      }

      100% {
        opacity: 1;
        transform: scaleY(1);
      }
    }
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
    display: none;
    width: 100%;
    border: 1px solid ${theme.colors.outline};
    background-color: ${theme.colors.elements};
    color: ${theme.colors.inputText};
    font-size:  ${theme.fontSizes.md};
    font-weight: 400;
    transform: scale(0);

    li {
      padding: 6px 0 6px 24px;
    }

    li:hover {
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
