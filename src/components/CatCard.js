import React, { useState } from 'react'

function CatCard({ cat }) {
  const {name, image, id}=cat

  return (
    <div>
      <p>{cat.name}</p>
      <img src={cat.image}></img>
    </div>
  )
}

export default CatCard