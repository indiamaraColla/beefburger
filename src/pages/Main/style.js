import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background: #D41515;
  height: 100vh;

  span {
    font-size: 24px;
    color: #fff;
  }
  strong {
    display: block;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Love Ya Like A Sister", cursive;

  span {
    font-size: 44px;
    color: #fff;
  }
  img {
    height: 160px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;
export const Button = styled.div`
  min-width: 180px;
  width: 260px;
`;