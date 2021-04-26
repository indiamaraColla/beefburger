import styled, { css } from 'styled-components';

export const Button = styled.button`
  margin-top: 18px;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  cursor: pointer;

  ${(props) =>
    props.outline &&
    css`
      border: none;
      color: #193b4b;
      background: transparent;
      flex-direction: row;
      width: 100px;
      padding: 8px 0;
    `}

  ${(props) =>
    props.blueDark &&
    css`
      background-color: #193b4b;
      color: #fff;
      border: 2px solid #193b4b;
      border-radius: 18px;
      padding: 8px;
      align-items: center;
      justify-content: center;
      width: 100%;
    `}
`;
