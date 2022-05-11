import React from 'react'
import CatCard from './CatCard'

function CatList({ cats, handleAdopt, upgrades }) {
  return (
    <div>
        <div className='imgWrapper'>{cats.map(cat=> <CatCard key = {cat.id} cat = {cat} handleAdopt={handleAdopt} upgrades={upgrades}/>)}</div>
    </div>
  )
}

export default CatList