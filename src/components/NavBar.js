import React from 'react'
import { NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className = 'navWrapper'>
      <NavLink className = 'navLinks' to = '/cats/new'>
        Add Custom Cat
      </NavLink>
    </div>
  )
}

export default NavBar