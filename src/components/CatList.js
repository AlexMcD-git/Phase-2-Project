import React from 'react'
import CatCard from './CatCard'

function CatList() {
  return (
    <div>CatList
        <ul>{<CatCard/>}</ul>
    </div>
  )
}

export default CatList