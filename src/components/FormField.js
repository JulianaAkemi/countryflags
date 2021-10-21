import styled from 'styled-components';

export const FormField = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  background-color: ${({ theme }) => theme.colors.elements};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.inputText};
`;
