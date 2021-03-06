import styled from 'styled-components';
import theme from '../../constants/theme';

export const ContainerModal = styled.div`
  padding: 20px;
  background: ${theme.white};
  border-radius: 18px;
  width: 600px;
`;

export const BoxModal = styled.div`
  margin: 8px 0;
  line-height: 1.4;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
`;

export const Box = styled.div`
  display: grid;
  align-items: center;
`;

export const ButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;
export const CountButton = styled.div`
  display: flex;
`;

export const Description = styled.span`
  font-size: 18px;
`;

export const BoxQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const BoxQuantityProduct = styled.div`
  display: flex;
`;

export const QuantityProduct = styled.span`
  margin: 0 12px;
`;

export const ButtonMore = styled.button`
  color: ${theme.white};
  border-radius: 4px;
  background-color: ${theme.darkBlue};
  width: 28px;
  font-size: 18px;
  border: none;
`;

export const ButtonLess = styled.button`
  color: ${theme.white};
  border-radius: 4px;
  background-color: ${theme.darkBlue};
  width: 28px;
  font-size: 18px;
  border: none;
`;
