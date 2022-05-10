import React from 'react'

function CatCard({ cat }) {
  const {name, image}=cat
  return (
    <div>
      <p>{cat.name}</p>
      <img src={cat.image}></img>
    </div>
  )
}

export default CatCard