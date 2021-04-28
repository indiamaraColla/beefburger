import React from 'react';
import { Container, Content } from './style';

import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

import TitleLogo from '../TitleLogo';

function Header() {
  return (
    <Container>
      <Content>
        <TitleLogo />
        <div>
          <a href="https://pt-br.facebook.com/" target="blank">
            <FaFacebook size={24} style={{ color: '#fff', marginRight: '10' }} />
          </a>
          <a href="https://twitter.com/login?lang=pt" target="blank">
            <AiFillTwitterCircle size={24} style={{ color: '#fff', marginRight: '10' }} />
          </a>
          <a href="https://www.youtube.com/?hl=pt&gl=BR" target="blank">
            <FaYoutube size={24} style={{ color: '#fff' }} />
          </a>
        </div>
      </Content>
    </Container>
  );
}
export default Header;
