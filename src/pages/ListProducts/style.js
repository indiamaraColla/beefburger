import styled from 'styled-components';

export const BoxFeatured = styled.div`
  background: #193b4b;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const BoxFeaturedNot = styled.div`
  color: red;
`;

export const BoxList = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
`;

export const BoxListPromotions = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media all and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.4;
  padding: 10px 0;
  margin: 10px 0;

  button {
    border: none;
    color: #fff;
    background: #e33030;
    font-size: 18px;
    margin: 0 10px;
    padding: 16px;
    border-radius: 16px;
    cursor: pointer;
  }

  @media all and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    button {
      padding: 8px 0;
      width: 100%;
      margin: 10px 0;
    }
  }
`;

export const BoxData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 70px;
    border-radius: 6px;
    width: 70px;
    margin-right: 10px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    img {
      height: 70px;
      width: auto;
      margin: 10px;
    }
  }
`;

export const Description = styled.span``;

export const BoxButton = styled.div`
  min-width: 200px;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
