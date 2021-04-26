import styled from 'styled-components';

export const Logo = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Love Ya Like A Sister', cursive;
  cursor: pointer;
  text-decoration: none;
  text-transform: none;

  span {
    font-size: 24px;
    color: #fff;
  }
  strong {
    display: block;
  }
  img {
    height: 56px;
    margin-right: 10px;
  }

  &:hover,
  &:visited {
    color: #fff;
  }
`;
