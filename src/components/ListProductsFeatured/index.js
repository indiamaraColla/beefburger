import React from 'react';
import BtnDarkRed from '../Button/BtnDarkRed';

import Image from '../Image';
import SubheadingText from '../Typografy/Subheading';

import { BoxList, Menu, BoxData, BoxDescription, Description, BoxButton } from './style';

const ListProductsFeatured = ({ onHandler, list }) => {
  const products = list || [];

  return (
    <BoxList>
      {products.map((item, index) => {
        return (
          <Menu key={index}>
            <BoxData>
              <Image src={item.image} alt={item.title} />

              <BoxDescription>
                <SubheadingText text={item.title} primary />
                <Description>{item.description}</Description>
                <SubheadingText text={`R$ ${item.price},00`} primary />
              </BoxDescription>
            </BoxData>

            <BoxButton>
              <BtnDarkRed onClick={() => onHandler(item)} primary text="adicionar ao ticket" />
            </BoxButton>
          </Menu>
        );
      })}
    </BoxList>
  );
};

export default ListProductsFeatured;
