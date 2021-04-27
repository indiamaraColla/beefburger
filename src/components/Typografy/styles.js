import styled, { css } from 'styled-components';

export const HeadlineText = styled.h1``;

export const SubheadingText = styled.h3`
  font-size: 28px;
  margin-left: 28px;
  font-weight: bold;
  padding: 6px 0;
  font-family: 'Londrina Shadow', cursive;
  color: #fff;

  ${(props) =>
    props.primary &&
    css`
      font-size: 16px;
      color: #193b4b;
      font-family: 'Montserrat', sans-serif;
      margin-left: 0;
      padding: 0;
    `}

  @media all and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;
