import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shoppage';
import SignInSignUp from './pages/signin-signup';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
