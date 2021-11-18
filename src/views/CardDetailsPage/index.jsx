import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardDetails from '../../components/CardDetails';
import { BsArrowLeft } from 'react-icons/bs';
import Container from '../../components/Container';
import AlignedWrapper from '../../components/AlignedWrapper';
import { normalizeCountryDetails } from '../../utils/countryDetail';
import { fetchCountries } from '../../services/countries';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CardDetailsPage = () => {
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let selectedCountry = searchParams.get('country');

  useEffect(() => {
    const handleFetchCountry = async () => {
      try {
        const response = await fetchCountries();
        const normalizedData = normalizeCountryDetails(response.data);
        if (!selectedCountry) {
          throw new Error('Country does not exist!');
        }
        const countryDetail = normalizedData.find(
          (country) => country.title === selectedCountry,
        );
        if (!countryDetail) {
          throw new Error('Country does not exist!');
        }
        setCountry(countryDetail);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleFetchCountry();
  }, [selectedCountry]);

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
