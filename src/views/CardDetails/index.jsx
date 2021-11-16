import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardDetails from '../../components/CardDetails';
import { BsArrowLeft } from 'react-icons/bs';
import Container from '../../components/Container';
import AlignedWrapper from '../../components/AlignedWrapper';
import { normalizeCountryDetails } from '../../utils/countryDetail';
import { fetchCountries } from '../../services/countries';

const CardDetailsPage = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const handleFetchCountries = async () => {
      try {
        const response = await fetchCountries();
        const normalizedData = normalizeCountryDetails(response.data);
        const countryDetail = normalizedData.find(
          (country) => country.title === 'China',
        );
        setCountry(countryDetail);
        console.log(country);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleFetchCountries();
  }, []);

  return (
    <Page>
      <AlignedWrapper>
        <Container>
          <GoBack>
            <p>
              <Icon as={BsArrowLeft} />
              Back
            </p>
          </GoBack>
        </Container>
      </AlignedWrapper>
      <CardDetails item={country} />
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
  margin: 17px 0;
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
    margin: 25px 0;
  }
`;

const Icon = styled.svg`
  margin-right: 16px;
  width: 19px;
  height: 13px;
`;

export default CardDetailsPage;
