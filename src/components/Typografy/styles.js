import styled, { css } from 'styled-components';

export const HeadlineText = styled.h1`
  font-weight: bold;
  color: #193b4b;
  margin-bottom: 18px;

  ${(props) =>
    props.primary &&
    css`
      border-bottom: 2px solid #ccc;
      text-align: center;
    `}
`;

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

  ${(props) =>
    props.secondary &&
    css`
      font-size: 18px;
      font-family: 'Montserrat', sans-serif;
      color: #e33030;
      margin-left: 0;
      padding: 0;
    `}

  @media all and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;
