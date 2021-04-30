import styled from 'styled-components';
import theme from '../../constants/theme';

export const Logo = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Love Ya Like A Sister', cursive;
  cursor: pointer;
  text-decoration: none;
  text-transform: none;

  span {
    font-size: 24px;
    color: ${theme.white};
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
    color: ${theme.white};
  }
`;
