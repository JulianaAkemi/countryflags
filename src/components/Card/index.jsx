import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import noImage from '../../assets/no-image-available.png';

const Card = ({ item }) => {
  let navigate = useNavigate();

  function goToDetails() {
    navigate(`/card-details/${item.title}`);
  }

  if (!item || Object.keys(item).length === 0) return <></>;

  return (
    <div className='card' onClick={goToDetails}>
      <CardImage>
        {item.image ? <img src={item.image} /> : <img src={noImage} />}
      </CardImage>
      <CardInfo>
        <h2>{item.title}</h2>
        {item.info.map((info, index) => (
          <p key={index}>
            <strong>{[Object.keys(info)[0]]}:</strong> {Object.values(info)}
          </p>
        ))}
      </CardInfo>
    </div>
  );
};

const CardImage = styled.div`
  img {
    width: 343px;
    height: 200px;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      height: 153px;
      width: 241px;
    }
    object-fit: cover;
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

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 400;
    margin-top: 15px;
  }
`;

export default Card;
