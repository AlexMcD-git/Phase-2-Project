import React, { useState, useEffect } from 'react'

function CatCard({ cat, handleAdopt }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const {name, image, id}=cat
  const [catStats, setCatStats] = useState({
    happiness:getRandomInt(20),
    hunger:90
  })

  function feedCat(){
    setCatStats({...catStats,
      happiness:catStats.happiness+2,
      hunger:catStats.hunger-10})
  }
  function petCat(){
    setCatStats({
      ...catStats,
      happiness:catStats.happiness+5
    })
  }

  function statsUpdate(){
    if(catStats.hunger<100)
    setCatStats({
      ...catStats,
      hunger:catStats.hunger+1
    })
  }

  useEffect(() => {
    const timerID = setTimeout(statsUpdate, 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  },[catStats])



  return (
    <div>
      <p>{name}</p>
      <img src={image}></img>
      <ul>
        <li>{catStats.happiness>=100? 
      <button onClick={()=>handleAdopt(id)}>Adopt</button>:null}</li>

        {catStats.happiness<100?
        <><li>Happiness: {catStats.happiness} / 100 {catStats.happiness<70?<button onClick={petCat}>Pet Cat</button>:null}</li>
        <li>Hunger: {catStats.hunger} / 100  {catStats.hunger>50?<button onClick={feedCat}>feed</button>:null}</li></>
        :null}
      </ul>
    </div>
  )
}

export default CatCard