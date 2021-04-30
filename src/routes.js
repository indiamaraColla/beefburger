import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RecoverPassword from './pages/RecoverPassword';
import Home from './pages/Home';
import DescriptionFood from './pages/DescriptionFood';
import FinalizandoFood from './pages/FinalizandoFood';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from './constants';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.main} exact component={Main} />

        <Route path="*">
          <div>
            <Header />
          </div>
          <Route path={routes.signin} component={SignIn} />
          <Route path={routes.signup} component={SignUp} />
          <Route path={routes.newpassword} component={RecoverPassword} />
          <Route path={routes.home} component={Home} />
          <Route path="/product/:type/:id" exact component={DescriptionFood} />
          <Route path="/product/:type/:id/finish" component={FinalizandoFood} />
        </Route>
      </Switch>

      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </BrowserRouter>
  );
};

export default Routes;
