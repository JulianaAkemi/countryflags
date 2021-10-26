import React from 'react';
import styled from 'styled-components';
import noImage from '../../assets/no-image-available.png';
import AlignedWrapper from '../AlignedWrapper';
import Container from '../Container';

const CardDetails = ({ data }) => {
  const item = data[1];
  const links = item[Object.keys(item)[6]].split(',');

  if (!data?.length) return <></>;

  return (
    <DetailsSection>
      <DetailsImage>
        {item[Object.keys(item)[0]] ? (
          <img src={item[Object.keys(item)[0]]} />
        ) : (
          <img src={noImage} />
        )}
      </DetailsImage>

      <AlignedWrapper>
        <Container>
          <CardDetailsInfo>
            <DetailsImageDesktop>
              {item[Object.keys(item)[0]] ? (
                <img src={item[Object.keys(item)[0]]} />
              ) : (
                <img src={noImage} />
              )}
            </DetailsImageDesktop>
            <div>
              <h2>{item[Object.keys(item)[5]]}</h2>

              <div className='text-info'>
                <p>
                  <strong>{[Object.keys(item)[7]]}:</strong>{' '}
                  {item[Object.keys(item)[7]]}
                </p>
                <p>
                  <strong>{[Object.keys(item)[2]]}:</strong>{' '}
                  {item[Object.keys(item)[2]]}
                </p>
                <p>
                  <strong>{[Object.keys(item)[1]]}:</strong>{' '}
                  {item[Object.keys(item)[1]]}
                </p>
                <p>
                  <strong>{[Object.keys(item)[8]]}:</strong>{' '}
                  {item[Object.keys(item)[8]]}
                </p>
                <p>
                  <strong>{[Object.keys(item)[3]]}:</strong>{' '}
                  {item[Object.keys(item)[3]]}
                </p>
                <p>
                  <strong>{[Object.keys(item)[4]]}:</strong>{' '}
                  {item[Object.keys(item)[4]]}
                </p>
              </div>

              <LinkList>
                <h3>Border Countries:</h3>

                {!!links?.length ? (
                  links.map((item) => <a key={item}>{item}</a>)
                ) : (
                  <p>There are no border countries</p>
                )}
              </LinkList>
            </div>
          </CardDetailsInfo>
        </Container>
      </AlignedWrapper>
    </DetailsSection>
  );
};

const DetailsSection = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const DetailsImage = styled.div`
  img {
    width: 100vw;
    border-radius: 2px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      display: none;
    }
  }
`;

const DetailsImageDesktop = styled.div`
  img {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      display: inherit;
      width: 414px;
      margin-right: 100px;
      border-radius: 2px;
    }
  }
`;

const CardDetailsInfo = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xlg};
    font-weight: 800;
    margin-top: 32px;
    margin-bottom: 23px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-top: 0px;
    }
  }

  strong {
    text-transform: capitalize;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 400;
    margin-bottom: 21px;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 242px;
    }
  }

  p:nth-child(4) {
    margin-bottom: 64px;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 21px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;

    .text-info {
      height: 130px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;

const LinkList = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 64px;
  }

  h3 {
    width: 100%;
    margin-bottom: 8px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: inherit;
      margin-right: 30px;
    }
  }

  a {
    border: 1px solid ${({ theme }) => theme.colors.text};
    padding: 3px 15px;
    margin-right: 8px;
    margin-bottom: 8px;
    text-transform: capitalize;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default CardDetails;
