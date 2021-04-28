import React from 'react';

import Image from '../Image';
import SubheadingText from '../Typografy/Subheading';

import { BoxList, Menu, BoxData, Description, BoxButton } from './style';

const ListProductsFeatured = ({ onHandler, list }) => {
  const products = list || [];

  //   console.log('type list ::::::', list);
  //   console.log('type list ::::::', type);

  return (
    <BoxList>
      {products.map((item, index) => {
        return (
          <Menu key={index}>
            <BoxData>
              <Image src={item.image} alt={item.title} />

              <div>
                <SubheadingText text={item.title} primary />
                <Description>{item.description}</Description>
                <SubheadingText text={`R$ ${item.price},00`} primary />
              </div>
            </BoxData>

            <BoxButton>
              <button onClick={() => onHandler(item)}>adicionar ao ticket</button>
            </BoxButton>
          </Menu>
        );
      })}
    </BoxList>
  );
};

export default ListProductsFeatured;
