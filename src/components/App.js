import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Upgrades from './Upgrades';
import Profile from './Profile';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path = '/upgrades'>
          <Upgrades/>
        </Route>
        <Route path = '/profile'>
          <Profile/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
