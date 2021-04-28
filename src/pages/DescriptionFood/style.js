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

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #193b4b;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    padding-bottom: 4px;
    border-bottom: 2px solid #ccc;
  }
`;
export const Box = styled.div`
  display: grid;
  align-items: center;

  span {
    font-size: 14px;
    margin: 6px 0;
  }
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

  button {
    display: inline-block;
    width: 28px;
    font-size: 16px;
    border: 1px solid #de080d;
  }
  .text {
    padding: 8px;
  }
`;
export const CountButton = styled.div`
  display: flex;

  button {
    background: #fff;
    border-radius: 8px;
  }
`;
export const Description = styled.div``;
