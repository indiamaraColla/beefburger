import styled from 'styled-components';

export const Menu = styled.div`
  padding: 20px;
`;
export const MenuDescription = styled.div`
  max-width: 820px;
  margin: 0 auto;
  min-height: 370px;
`;
export const BoxDescription = styled.div`
  background: #fff;
  border-radius: 18px;
  max-width: 800px;
`;

export const BoxList = styled.div`
  margin: 8px 0;
  line-height: 1.4;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
`;
export const Box = styled.div`
  display: grid;
  align-items: center;

  img {
    border-radius: 6px;
    margin: 10px 0;
    width: 100%;
    max-width: 400px;
  }
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
  color: #fff;
  border-radius: 4px;
  background-color: #193b4b;
  width: 28px;
  font-size: 18px;
  border: none;
`;

export const ButtonLess = styled.button`
  color: #fff;
  border-radius: 4px;
  background-color: #193b4b;
  width: 28px;
  font-size: 18px;
  border: none;
`;
