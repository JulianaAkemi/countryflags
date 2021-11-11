import React from 'react';
import styled from 'styled-components';
import CardDetails from '../../components/CardDetails';
import { BsArrowLeft } from 'react-icons/bs';
import Container from '../../components/Container';
import AlignedWrapper from '../../components/AlignedWrapper';
import { useNavigate } from 'react-router-dom';

const CardDetailsPage = () => {
  let navigate = useNavigate();

  function handleGoBack() {
    navigate('/');
  }

  return (
    <Page>
      <AlignedWrapper>
        <Container>
          <GoBack onClick={handleGoBack}>
            <p>
              <Icon as={BsArrowLeft} />
              Back
            </p>
          </GoBack>
        </Container>
      </AlignedWrapper>
      <CardDetails />
    </Page>
  );
};

const Page = styled.div`
  margin-bottom: 58px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 80px;
  }
`;

const GoBack = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  width: 100%;

  p {
    width: 110px;
    padding: 15px 15px 15px 0;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const Icon = styled.svg`
  margin-right: 16px;
  width: 19px;
  height: 13px;
`;

export default CardDetailsPage;
