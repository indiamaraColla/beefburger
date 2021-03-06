import React, { createContext, useContext, useState } from 'react';

const initialState = {
  cardItems: [],
  products: {
    burger: [],
    pizza: [],
    soup: [],
    promotions: [],
  },
};

const BurgerContext = createContext(initialState);

const useBurger = () => {
  return useContext(BurgerContext);
};

const BurgerProvider = ({ children }) => {
  const [cardItems, setCartItems] = useState(initialState.cardItems);
  const [products, setProducts] = useState(initialState.products);

  const addCart = (product) => {
    setCartItems([...cardItems, product]);
  };

  const removeCart = (id) => {
    const items = cardItems.filter((item) => item.id !== id);
    setCartItems(items);
  };

  const setListProducts = (key, list) => {
    setProducts({ ...products, [key]: list });
  };

  const values = {
    cardItems,
    addCart,
    removeCart,
    products,
    setCartItems,
    setProducts: setListProducts,
  };

  return <BurgerContext.Provider value={values}>{children}</BurgerContext.Provider>;
};

export { useBurger, BurgerProvider };
