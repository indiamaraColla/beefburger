import styled from 'styled-components';

export const Img = styled.img`
  height: 76px;
  border-radius: 6px;
  width: 116px;

  @media all and (max-width: 500px) {
    img {
      height: 70px;
      width: auto;
      margin: 10px;
    }
  }
`;
