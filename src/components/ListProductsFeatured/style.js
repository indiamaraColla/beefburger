import styled from 'styled-components';
import theme from '../../constants/theme';

export const BoxList = styled.div`
  background: ${theme.white};
  border-radius: 16px;
  padding: 20px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.1;
  padding: 8px;
  border-bottom: 1px solid ${theme.lightGray};

  @media all and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px 0;
    padding: 10px 0;
  }
`;

export const BoxData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const BoxDescription = styled.div`
  margin: 0 12px;

  @media all and (max-width: 768px) {
    margin: 12px 0;
    text-align: center;
  }
`;

export const Description = styled.span``;

export const BoxButton = styled.div`
  min-width: 200px;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
