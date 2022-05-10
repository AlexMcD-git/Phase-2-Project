import React, { useEffect, useState } from 'react'
import CatList from './CatList'
import TrapCat from './TrapCat'

function Home() {
  const [cats, setCats] = useState([])

  useEffect(()=>{fetch('http://localhost:3001/cats')
  .then(r=>r.json())
  .then(data=>setCats(data))}
  ,[])

  // console.log(cats)

  return (
    <div>Home
        <TrapCat/>
        <CatList/>
    </div>
  )
}

export default Home