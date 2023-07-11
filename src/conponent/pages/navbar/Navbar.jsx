import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"

export default function Navbar(){
    return(
        <nav className='nav-bar'>
            <p>
                <img src={logo} alt="" />
            </p>
            <div className="menu">
                <Link to ="/" className={(Link)=>(Link.isActive? ".nav-active": "")}>Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Services">Services</Link>
                <Link to ="/Dashboard">Dashboard</Link>
                <Link to ="/Login" className='btn'>Login</Link>
            </div>
        </nav>
    )
}