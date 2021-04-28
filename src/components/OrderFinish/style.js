import styled from 'styled-components';

export const BoxDescription = styled.div`
  background: #fff;
  padding: 30px;
  margin: 30px 0;
  border-radius: 18px;
`;

export const BoxList = styled.div`
  margin: 8px 0;
  line-height: 1.4;
  display: grid;
  align-items: center;
  grid-template-rows: 1fr auto 0;
  border-bottom: 1px solid #ccc;
  padding: 24px 0;
  span {
    font-size: 14px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex: 1;
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Adress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  img {
    height: 60px;
    margin-right: 20px;
  }
`;

export const Button = styled.div`
  font-size: 16px;
  display: block;

  .hidden {
    display: none;
  }
`;

export const RemoverLixeira = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  img {
    height: 20px;
    margin-left: 10px;
  }
`;
