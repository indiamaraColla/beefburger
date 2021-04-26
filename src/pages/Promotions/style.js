import styled from 'styled-components';

export const BoxPromotion = styled.div`
  max-width: 820px;
  margin: 30px auto;
  background: #193b4b;
  border-radius: 20px;

  h3 {
    font-size: 28px;
    margin-left: 28px;
    font-weight: bold;
    padding: 6px 0;
    font-family: 'Londrina Shadow', cursive;
    color: #fff;
  }
`;
export const BoxList = styled.div`
  background: #fff;
  border-radius: 16px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media all and (max-width: 700px) {
    min-width: 200px;
    grid-template-columns: 1fr;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  margin: 0 16px;
  line-height: 1.4;
  p {
    font-size: 14px;
  }
  h4 {
    color: #de080d;
  }
  strong {
    color: #de080d;
  }
  img {
    height: 80px;
    border-radius: 10px;
    width: 90px;
    padding: 6px;
  }
  @media all and (max-width: 500px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
  }
`;
