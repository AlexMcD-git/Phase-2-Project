import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import CatList from './CatList'
import NewCatForm from './NewCatForm'
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


  console.log(cats)

  return (
    <div>Home
        <NewCatForm/>
        <TrapCat addNewCat={addNewCat}/>
        <CatList cats = {cats}/>
    </div>
  )
}

export default Home



