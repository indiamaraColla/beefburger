import styled, { css } from 'styled-components';
import theme from '../../../constants/theme';

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
      color: ${theme.darkBlue};
      background: transparent;
      flex-direction: row;
      width: 100px;
      padding: 8px 0;
    `}

  ${(props) =>
    props.blueDark &&
    css`
      background-color: ${theme.darkBlue};
      color: ${theme.white};
      border: 2px solid ${theme.darkBlue};
      border-radius: 18px;
      padding: 8px;
      align-items: center;
      justify-content: center;
      width: 100%;
    `}
`;
