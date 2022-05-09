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

      <Home/>
      <Upgrades/>
      <Profile/>
      
    </>
  );
}

export default App;
