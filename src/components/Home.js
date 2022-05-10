import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import CatList from './CatList'
import TrapCat from './TrapCat'

function Home() {
  const [cats, setCats] = useState([])

  function addNewCat(cat){
    setCats([...cats, cat])
  }

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

  console.log(cats)

  return (
    <div>Home
        <TrapCat addNewCat={addNewCat}/>
        <CatList cats = {cats} handleAdopt={handleAdopt}/>
    </div>
  )
}

export default Home