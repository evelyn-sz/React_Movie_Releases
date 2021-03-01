import React from 'react';

import styled from 'styled-components';

const MyBeautifulButton = props => {
  const BeautifulButton = styled.button`
    color: #494949;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    font-size: 20px;
    border: 4px solid #494949;
    display: inline-block;
    transition: all 0.4s ease 0s;
    &:hover {
      color: #ffffff;
      background: #f6b93b;
      border-color: #f6b93b;
      transition: all 0.4s ease 0s;
    }
  `;

  const BeautifulPrimaryButton = styled(BeautifulButton)`
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    &:hover {
      color: #494949;
      background: #ffffff;
      border-color: #494949;
    }
  `;

  return (
    <div>
      {props.primary ? (
        <BeautifulPrimaryButton><a href="https://www.imdb.com/calendar/?region=gb">View Upcoming Movies</a></BeautifulPrimaryButton>
      ) : (
        <BeautifulButton><a href="https://www.imdb.com/calendar/?region=gb">View Upcoming Movies</a></BeautifulButton>
      )}
    </div>
  );
};

export default MyBeautifulButton;
