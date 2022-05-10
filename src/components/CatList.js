import React from 'react'
import CatCard from './CatCard'

function CatList({ cats }) {
  return (
    <div>CatList
        <div className='imgWrapper'>{cats.map(cat=> <CatCard key = {cat.id} cat = {cat}/>)}</div>
    </div>
  )
}

export default CatList