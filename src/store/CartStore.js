import React, { createContext, useContext, useMemo, useState } from 'react';

const initialState = {
  products: [],
};

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, updateCart] = useState(initialState);
  const setCart = (data) => updateCart({ ...cart, ...data });

  const providerValue = useMemo(
    () => ({
      cart,
      setCart,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  return <CartContext.Provider value={providerValue}>{children}</CartContext.Provider>;
};
const useCart = () => useContext(CartContext);

export { CartContext, CartProvider, useCart };
