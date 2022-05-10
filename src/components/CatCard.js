import React, { useState } from 'react'

function CatCard({ cat }) {
  const {name, image, id}=cat

  return (
    <div>
      <p>{name}</p>
      <img src={image}></img>
    </div>
  )
}

export default CatCard