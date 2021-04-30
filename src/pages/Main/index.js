import React from 'react';
import { Container, Content, Background, Logo, Title, Image, CardDesc, SubTitle, Link } from './style';

import burger from '../../img/burger.jpg';
import { routes } from '../../constants';

const Main = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Image src={burger} alt="burger" />
          <Title>
            Beef <strong>Burger</strong>
          </Title>
        </Logo>
        <CardDesc>
          <SubTitle>
            <strong> Deu fome?</strong> Sem problema é só...
          </SubTitle>
          <Link href={routes.signin}>pedir</Link>
        </CardDesc>
      </Content>
      <Background />
    </Container>
  );
};
export default Main;
