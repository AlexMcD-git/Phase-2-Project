import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import NewCatForm from './NewCatForm';
import Upgrades from './Upgrades';
import Profile from './Profile';

function App() {
  const [cats, setCats] = useState([])
  const [profile, setProfile] = useState({
    name:"",
    money:0,
    score:0
  })
  console.log(profile)

  function addNewCat(cat){
    setCats([...cats, cat])
  }
  useEffect(()=>{fetch('http://localhost:3001/profile')
  .then(r=>r.json())
  .then(setProfile)}
  ,[])

  useEffect(()=>{fetch('http://localhost:3001/cats')
  .then(r=>r.json())
  .then(data=>setCats(data))}
  ,[])

  function handleAdopt(id){
    fetch(`http://localhost:3001/cats/${id}`,{
      method:"DELETE"
    })
    .then(`Cat ${id} found a home.`)
    setCats([...cats].filter(cat=>{
      return cat.id!==id
    }))


  }

  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path = '/'>
          <Home cats={cats} addNewCat={addNewCat} handleAdopt={handleAdopt} />
        </Route>
        <Route path = '/cats/new'>
          <NewCatForm addNewCat = {addNewCat} />
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
