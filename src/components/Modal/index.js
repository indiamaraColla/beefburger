import React from 'react';

import { Container } from './style';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return <Container>{props.children}</Container>;
};

export default Modal;
