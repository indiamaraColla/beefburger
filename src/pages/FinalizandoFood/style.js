import styled from "styled-components";

export const Menu = styled.div`
  padding: 20px;
`;
export const MenuDescription = styled.div`
  max-width: 820px;
  margin: 0 auto;
  
`;
export const BoxDescription = styled.div`
  background: #FFF;
  padding:30px;
  margin: 30px 0;
  border-radius: 18px;

  h3 {
  border-bottom: 2px solid #ccc;
  padding: 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  }
`;

export const BoxList = styled.div`
  margin: 8px 0;
  line-height: 1.4;
  display: grid;
  align-items: center;
  grid-template-rows: 1fr auto 0;
  
  h4, p{
    color: #DE080D;
  }
  span{
     font-size: 14px;
  }
`;
export const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex: 1;
`;
export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

`;
export const RemoverLixeira = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  
  h5{
    margin: 0 10px;
  }
    img {
    height: 20px;
    margin-left: 10px;
  }
`;
export const Adress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  p{
    color: #000;
  }

  img{
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
export const ContentModal = styled.div`
  height: calc(100vh - 6px);
`;