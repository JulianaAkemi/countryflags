import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GrDown } from 'react-icons/gr';
import { FormField } from '../FormField';
import useOnClickOutside from '../../utils/useOnClickOutside';

const Filter = ({ prompt, options, optionValue, onChange, getFilter }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  const handleSelection = (e) => {
    onChange(e.target.innerText);
    getFilter(e.target.innerText);
    setOpen(false);
  };

  return (
    <Select ref={ref}>
      <Control onClick={() => setOpen(!open)}>
        <p>{optionValue ? optionValue : prompt}</p>
        <Icon as={GrDown} className={`${open ? 'arrow-open' : null}`} />
      </Control>
      <Options className={`${open ? 'options-open' : null}`}>
        <ul>
          {options.map((option) => (
            <li
              key={option}
              className={`${optionValue === option ? 'selected' : null}`}
              onClick={handleSelection}
            >
              {option}
            </li>
          ))}
        </ul>
      </Options>
    </Select>
  );
};

const Select = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }

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
    position: absolute;
    z-index: 2;

    li {
      padding: 6px 0 6px 24px;

      &:hover {
        background: ${theme.colors.inputText};
        color: ${theme.colors.elements};
      }
    }

    .selected {
      background: ${theme.colors.outline};
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
