import React from 'react';
import styled from 'styled-components';
import noImage from '../../assets/no-image-available.png';

const Card = ({ item }) => {
  if (!item || Object.keys(item).length === 0) return <></>;

  return (
    <div>
      <CardImage>
        {item[Object.keys(item)[0]] ? (
          <img src={item[Object.keys(item)[0]]} />
        ) : (
          <img src={noImage} />
        )}
      </CardImage>
      <CardInfo>
        <h2>{item[Object.keys(item)[1]]}</h2>
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
      </CardInfo>
    </div>
  );
};

const CardImage = styled.div`
  img {
    width: 100%;
    border-radius: 2px 2px 0px 0px;
    margin-bottom: -5px;
  }
`;

const CardInfo = styled.div`
  border-radius: 0px 0px 2px 2px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.inputText};
  padding: 30px 24px;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 800;
    margin-bottom: 5px;
  }

  strong {
    text-transform: capitalize;
  }

  strong {
    text-transform: capitalize;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 400;
    margin-top: 15px;
  }
`;

export default Card;
