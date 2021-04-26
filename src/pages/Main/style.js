import styled from 'styled-components';
import sigInBackgrounImg from '../../img/burger.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #d41515;
  color: #fff;

  @media all and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Love Ya Like A Sister', cursive;
  margin-bottom: 24px;
`;

export const Title = styled.span`
  font-size: 44px;
  color: #fff;
`;

export const Image = styled.img`
  height: 10rem;
  border-radius: 50%;
  margin-right: 20px;

  @media all and (max-width: 768px) {
    height: 8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const SubTitle = styled.span`
  font-size: 24px;
  color: #fff;
`;

export const Link = styled.a`
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;

  &:visited {
    color: #fff;
  }
`;

export const CardDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  span {
    margin: 24px 0;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${sigInBackgrounImg}) no-repeat center;
  background-size: cover;
`;
