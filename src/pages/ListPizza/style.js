import styled from 'styled-components';
export const BoxFeatured = styled.div`
  background: #193b4b;
  border-radius: 20px;
  margin-bottom: 20px;
  h3 {
    font-size: 28px;
    margin-left: 28px;
    font-weight: bold;
    padding: 6px 0;
    font-family: 'Londrina Shadow', cursive;
    color: #fff;
  }
`;
export const Description = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
`;
export const DescriptionMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.4;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);

  button {
    border: none;
    color: #fff;
    background: #e33030;
    font-size: 18px;
    max-width: 130px;
    min-width: 130px;
    margin: 0 10px;
    padding: 6px;
    border-radius: 16px;
    cursor: pointer;
  }
  @media all and (max-width: 500px) {
    min-width: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const BoxData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    color: #193b4b;
  }
  img {
    height: 70px;
    border-radius: 6px;
    width: 70px;
    margin-right: 10px;
  }
  @media all and (max-width: 500px) {
    min-width: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      height: 70px;
      width: auto;
      margin: 10px;
    }
  }
`;
