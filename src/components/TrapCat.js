import React, { useState, useEffect } from 'react'

function TrapCat() {
  const [newCat, setNewCat] = useState({
    name:"",
    image:""
  })

  useEffect(()=>updateCat,[])

  function updateCat(){
    let url=""
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(r=>r.json())
    .then(data=>url=data[0]['url'])

    fetch("https://randomuser.me/api/")
    .then(r=>r.json())
    .then(data=>{
      data['results'][0]['name']['first']!==data['results'][0]['name']['first'].toLowerCase()?setNewCat({name:data['results'][0]['name']['first'], image:url}):updateCat()})
    }

  console.log(newCat)
  function generateRandomCat(){
    fetch("http://localhost:3001/cats",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCat)
    })
    .then(r=>r.json())
    .then(data=>console.log(data))
    updateCat()
  }
  return (
    <div>TrapCat
      <button onClick={
        generateRandomCat
      }>Catch A Cat</button>
    </div>
  )
}

export default TrapCat