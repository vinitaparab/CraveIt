import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo_icon} alt="" />
      <img className="craveit_logo" src={assets.CraveIt_icon} alt="" />
    </div>
  )
}

export default Navbar
