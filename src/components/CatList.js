import React from 'react'
import CatCard from './CatCard'

function CatList({ cats, handleAdopt }) {
  return (
    <div>CatList
        <div className='imgWrapper'>{cats.map(cat=> <CatCard key = {cat.id} cat = {cat} handleAdopt={handleAdopt}/>)}</div>
    </div>
  )
}

export default CatList