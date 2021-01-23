import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return(
      
        <nav>
            <NavLink className = "NavButton" to="/appointments">Appointments</NavLink> 
            <NavLink className = "NavButton" to="/Rental">Gear Rental</NavLink> 
            <NavLink className = "NavButton" to="/Slopes">Slopes and tracks</NavLink> 
        </nav>
    )
} 

export default NavBar