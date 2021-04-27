import styled from 'styled-components';

export const Img = styled.img`
  height: 70px;
  border-radius: 6px;
  width: 70px;
  margin-right: 10px;

  @media all and (max-width: 500px) {
    img {
      height: 70px;
      width: auto;
      margin: 10px;
    }
  }
`;
