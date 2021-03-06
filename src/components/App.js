import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import NewCatForm from './NewCatForm';
import Upgrades from './Upgrades';
import Profile from './Profile';
import useSound from 'use-sound';
import yay from '../sounds/yay.mp3'

function App() {
  const [cats, setCats] = useState([])
  const [profile, setProfile] = useState({})
  const [upgrades, setUpgrades] = useState([])
  const [playSound] = useSound(yay, { volume: 0.3 })

  console.log(cats)

  function fetchCats(){
  fetch('http://localhost:3001/cats')
  .then(r=>r.json())
  .then(setCats)
  }

  useEffect(()=>{fetchCats()},[])

  useEffect(()=>{fetch('http://localhost:3001/profile/1')
  .then(r=>r.json())
  .then(setProfile)}
  ,[])

  useEffect(()=>{fetchCats()},[])

  useEffect(()=>{fetch('http://localhost:3001/upgrades')
  .then(r=>r.json())
  .then(setUpgrades)}
  ,[])

  function addNewCat(cat){
    setCats([...cats, cat])
  }

  function handleMoney(moneyChange, scoreChange){
    fetch(`http://localhost:3001/profile/1`,{
      method:"PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({"money": profile.money+moneyChange, "score": profile.score+scoreChange})
    })
    .then(r=>r.json())
    .then(data=>setProfile({...data}))
  }
  

  function handleAdopt(id){
    fetch(`http://localhost:3001/cats/${id}`,{
      method:"DELETE"
    })
    .then(`Cat ${id} found a home.`)
    setCats([...cats].filter(cat=>{
      return cat.id!==id
    }))
    handleMoney(100,1)
    playSound()
  }

  function purchaseUpgrade(id, cost){
    console.log(id, -cost)
    handleMoney(-cost, 0)
    fetch(`http://localhost:3001/upgrades/${id}`,{
      method:"PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({"level": upgrades[id].level+1})
    })
    .then(r=>r.json())
    .then(data=>setUpgrades([...upgrades].map(upgrade=>{
      return upgrade.id!==id?upgrade:data
    })))
  }

  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path = '/'>
          <Home cats={cats} addNewCat={addNewCat} handleAdopt={handleAdopt} upgrades={upgrades}/>
        </Route>
        <Route path = '/cats/new'>
          <NewCatForm addNewCat = {addNewCat} />
        </Route>
        <Route path = '/upgrades'>
          <Upgrades money={profile.money} upgrades={upgrades} purchaseUpgrade={purchaseUpgrade}/>
        </Route>
        <Route path = '/profile'>
          <Profile profile={profile} upgrades={upgrades} cats={cats} addNewCat={addNewCat} fetchCats={fetchCats} handleMoney={handleMoney}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
