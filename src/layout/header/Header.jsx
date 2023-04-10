import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../header/header.css'
import {AiOutlineMenu,AiFillCloseCircle} from 'react-icons/ai'
import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
const Header = () => {
  const [menuOpen,setMenuOpen] = useState(false)
 
  return (
   <>
   <div className="header">
   <div className='logo-header'> <p> <FaLessThan/>Vinay /<FaGreaterThan/> </p> </div>
   {
            menuOpen?<div className="menu-btn" onClick={()=>setMenuOpen(false)}><AiFillCloseCircle className='menu-icon'/></div>:
            <div className="menu-btn" onClick={()=>setMenuOpen(true)}><AiOutlineMenu className='menu-icon'/></div>
         }
    <ul className={`nav-item ${menuOpen?'active-menu':''}`}>
        <li> <NavLink to ="/" className={({ isActive }) =>
              isActive ? 'activeLink' : 'navlink'}> Home </NavLink> </li>
        <li> <NavLink to ="/about" className={({ isActive }) =>
              isActive ? 'activeLink' : 'navlink'}> About </NavLink> </li>
        <li> <NavLink to ="/blog" className={({ isActive }) =>
              isActive ? 'activeLink' : 'navlink'}> Blog </NavLink> </li>
        <li> <NavLink to ="/port" className={({ isActive }) =>
              isActive ? 'activeLink' : 'navlink'}> PortFolio </NavLink> </li>
        <li> <NavLink to ="/contact" className={({ isActive }) =>
              isActive ? 'activeLink' : 'navlink'}> Contact </NavLink> </li>
                     {/* <li> <button type='button'> Login/Register </button> </li> */}
    </ul>
   </div>
   </>
  )
}

export default Header