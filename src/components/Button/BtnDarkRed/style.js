import styled, { css } from 'styled-components';

export const Button = styled.button`
  margin: 8px 0;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: #d41515;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  width: 100%;
  cursor: pointer;

  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border-radius: 20px;
    `}

  ${(props) =>
    props.outlineTransparente &&
    css`
      background-color: transparent;
      color: #d41515;
      border-radius: 0;
      border: none;
      text-decoration: underline;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      transition: all ease 0.2;
    `}

    &:hover {
    opacity: 0.6;
    transition: all ease 0.2;
  }
`;
