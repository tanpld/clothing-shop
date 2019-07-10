import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shoppage';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
