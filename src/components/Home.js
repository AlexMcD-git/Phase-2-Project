import React from 'react'
import CatList from './CatList'
import TrapCat from './TrapCat'

function Home({ cats, addNewCat, handleAdopt, upgrades }) {


  return (
    <div>
        <TrapCat addNewCat={addNewCat}/>
        <CatList cats = {cats} handleAdopt={handleAdopt} upgrades={upgrades}/>
    </div>
  )
}

export default Home



