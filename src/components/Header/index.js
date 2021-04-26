import React from 'react';
import { MainHeader, Container, Link } from './style';

import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

import TitleLogo from '../TitleLogo';

function Header() {
  return (
    <MainHeader>
      <Container>
        <TitleLogo />
        <Link className="back-link" to="/register">
          <a href="https://pt-br.facebook.com/" target="blank">
            <FaFacebook size={24} color="#fff" />
          </a>
          <a href="https://twitter.com/login?lang=pt" target="blank">
            <AiFillTwitterCircle size={24} color="#fff" />
          </a>
          <a href="https://www.youtube.com/?hl=pt&gl=BR" target="blank">
            <FaYoutube size={24} color="#fff" />
          </a>
        </Link>
      </Container>
    </MainHeader>
  );
}
export default Header;
