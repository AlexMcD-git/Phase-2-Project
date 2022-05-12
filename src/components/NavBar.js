import React from 'react'
import { NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className = 'navWrapper'>
      <NavLink className = 'navLinks' exact to = '/'>
        Home
      </NavLink>
      <NavLink className = 'navLinks' exact to = '/cats/new'>
        Add Custom Cat
      </NavLink>
      <NavLink className = 'navLinks' exact to = '/upgrades'>
        Upgrades
      </NavLink>
      <NavLink className = 'navLinks' exact to = '/profile'>
        Profile
      </NavLink>
    </div>
  )
}

export default NavBar