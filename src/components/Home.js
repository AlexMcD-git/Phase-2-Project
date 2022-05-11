import React from 'react'
import CatList from './CatList'
import TrapCat from './TrapCat'

function Home({ cats, addNewCat, handleAdopt }) {


  return (
    <div>
        <TrapCat addNewCat={addNewCat}/>
        <CatList cats = {cats} handleAdopt={handleAdopt}/>
    </div>
  )
}

export default Home



