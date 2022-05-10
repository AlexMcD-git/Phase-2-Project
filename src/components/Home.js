import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import CatList from './CatList'
import TrapCat from './TrapCat'

function Home({ cats, addNewCat, handleAdopt }) {

  console.log(cats)

  return (
    <div>Home
        <TrapCat addNewCat={addNewCat}/>
        <CatList cats = {cats} handleAdopt={handleAdopt}/>
    </div>
  )
}

export default Home