//import { render } from '@testing-library/react'
import React from 'react'
import CatList from './CatList'
import NewCatForm from './NewCatForm'
import TrapCat from './TrapCat'

function Home({ cats, addNewCat, handleAdopt }) {


  return (
    <div>Home
        <NewCatForm addNewCat={addNewCat}/>
        <TrapCat addNewCat={addNewCat}/>
        <CatList cats = {cats} handleAdopt={handleAdopt}/>
    </div>
  )
}

export default Home



