import React, { createContext, useState, useContext } from 'react';

const initialState = {
  user: {
    email: '',
    password: '',
  },
};

const AuthContext = createContext(initialState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialState.user);

  const values = {
    setUser,
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthContext, AuthProvider };
