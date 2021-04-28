import React from 'react';
import GlobalStyle from './styles/global';
import AppStore from './store/index';

import Routes from './routes';

const App = () => {
  return (
    <AppStore>
      <GlobalStyle />
      <Routes />
    </AppStore>
  );
};

export default App;
