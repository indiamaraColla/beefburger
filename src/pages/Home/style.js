import styled from 'styled-components';
import theme from '../../constants/theme';

export const Menu = styled.div`
  padding: 20px;
  max-width: 820px;
  margin: 0 auto;
`;

export const DataList = styled.div`
  border-radius: 10px;
  height: 100%;
  color: ${theme.darkBlue};
  background: ${theme.white};
  padding: 16px;
  margin: 20px 0;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;

  @media all and (max-width: 600px) {
    min-width: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    padding: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  border-radius: 8px;
  padding: 20px;

  &.active,
  &:hover {
    background: ${theme.yellow};

    h3 {
      color: ${theme.white};
    }
  }
`;

export const Footer = styled.div`
  background: ${theme.darkBlue};
  padding: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${theme.white}; ;
`;
