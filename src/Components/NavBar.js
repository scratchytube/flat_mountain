import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {Button } from "./Button"

const NavBar = () => {
const [click, setClick] = useState(false)
const [button, setButton] = useState(true)

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false)
    } else { 
        setButton(true)
    }
}

useEffect(()=> {
    showButton()
},[])
//resize is bad practice, crashes other browser
window.addEventListener("resize", showButton)
    return(
      <>
        <nav className = "navbar">
            <div className="navbar-container">
            <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
                Flat Mountain<i class="fas fa-mountain"></i>
            </Link>
            <div className = "menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className ={click ? "nav-menu active" : "nav-menu"}>
                <li className = "nav-item">
                    <Link to= "/" className = "nav-links" onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to= "/appointments" className = "nav-links" onClick={closeMobileMenu}>
                    Appointments
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to= "/rentals" className = "nav-links" onClick={closeMobileMenu}>
                    Rental
                    </Link> 
                </li>
                <li className = "nav-item">
                    <Link to= "/slopes" className = "nav-links" onClick={closeMobileMenu}>
                    Slopes and Tracks
                    </Link>
                </li>
                {/* <li className = "nav-item">
                    <Link to= "/sign-up" className = "nav-links-mobile" onClick={closeMobileMenu}>
                    Sign up
                    </Link>
                </li> */} 
             </ul> 
             {button && <Button buttonStyle="btn--outline">LogIn</Button>}
            </div> 
        </nav>
    </>    
    )
} 

export default NavBar