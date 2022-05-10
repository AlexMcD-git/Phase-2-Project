import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import CatList from './CatList'
import NewCatForm from './NewCatForm'
import TrapCat from './TrapCat'

function Home({ cats, addNewCat, handleAdopt }) {

  console.log(cats)

  return (
    <div>Home
        <NewCatForm/>
        <TrapCat addNewCat={addNewCat}/>
        <CatList cats = {cats} handleAdopt={handleAdopt}/>
    </div>
  )
}

export default Home



