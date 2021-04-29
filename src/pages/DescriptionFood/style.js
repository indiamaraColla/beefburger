import styled from 'styled-components';

export const ContainerModal = styled.div`
  padding: 20px;
  background: #fff;
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

export const ContentModal = styled.div`
  display: grid;
  align-items: center;

  img {
    border-radius: 6px;
    margin: 10px 0;
    width: 100%;
    max-width: 400px;
  }
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

export const ButtonLess = styled.button`
  color: #fff;
  border-radius: 4px;
  background-color: #193b4b;
  width: 28px;
  font-size: 18px;
  border: none;
`;

export const ButtonMore = styled.button`
  color: #fff;
  border-radius: 4px;
  background-color: #193b4b;
  width: 28px;
  font-size: 18px;
  border: none;
`;

export const QuantityProduct = styled.span`
  margin: 0 12px;
`;

export const Description = styled.span`
  font-size: 18px;
`;
