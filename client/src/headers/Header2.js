import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
    
    return (
        <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"grey"}}>

            
            <li className="nav-link ">
                <NavLink to="/adminDashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Complete feedback info
                </NavLink>
            </li>

          


           

            <li className="nav-link">
                <NavLink to="/contact2" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    contact us
                </NavLink>
            </li>
            
            <li className="nav-link">
                <NavLink to="/login" onClick={()=>localStorage.clear()} style={{"textDecoration": "none"}}>
                    Logout
                </NavLink>
            </li>

        </nav>
    )
}

export default Header
