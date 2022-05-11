import React from 'react'
import { NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className = 'navWrapper'>
      <NavLink className = 'navLinks' to = '/'>
        Home
      </NavLink>
      <NavLink className = 'navLinks' to = '/cats/new'>
        Add Custom Cat
      </NavLink>
      <NavLink className = 'navLinks' to = '/upgrades'>
        Upgrades
      </NavLink>
      <NavLink className = 'navLinks' to = '/profile'>
        Profile
      </NavLink>
    </div>
  )
}

export default NavBar