import React from 'react';

import { CartProvider } from './CartStore';
import { BurgerProvider } from './BurgerStore';
import { AuthProvider } from './AuthStore';

const AppStore = ({ children }) => {
  return (
    <BurgerProvider>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </BurgerProvider>
  );
};

export default AppStore;
