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

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="*">
          <div>
            <Header />
          </div>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/newpassword" component={RecoverPassword} />
          <Route path="/home" component={Home} />
          <Route path="/product/:type/:id" exact component={DescriptionFood} />
          <Route path="/product/:type/:id/finish" component={FinalizandoFood} />
        </Route>
      </Switch>

      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </BrowserRouter>
  );
}
