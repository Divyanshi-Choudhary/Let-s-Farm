import React, { useState } from "react"
import logo from '../../assets/logo.png'
import './navbar.css'
import {BsSearch} from 'react-icons/bs'
import {SlHandbag} from 'react-icons/sl'
import {IoIosMenu} from 'react-icons/io'
import {TfiClose,TfiUser} from 'react-icons/tfi'
import { Link } from "react-router-dom"
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(true)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
  return (
    <>
    <div className="nav">
    <button onClick={handleToggle}>{navbarOpen ?  <IoIosMenu/> :<TfiClose/> }</button>
    <div className="nav_logo">
            <Link to="/"><img src={logo} alt="" /></Link>
        </div>
       <div className={navbarOpen ? "nav_links" : "nav_links open"} >
            <a href="/">Our Shop</a>
            <a href="#">Products</a>
            <a href="#about">About Us</a>
            <a href="#testimonials">Testimonials</a>
        </div>
        
        <div className="nav_items">
            <a href="#"><BsSearch size={20}/></a>
            <a href="#"><SlHandbag size={20}/></a>
            <Link to="/accounts/signIn"><TfiUser size={20}/></Link>

        </div>
    </div>
    </>
  )
}

export default Navbar