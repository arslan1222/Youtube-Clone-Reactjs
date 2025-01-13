import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img onClick={()=>setSidebar(prev=>prev===false ? true : false)} src={assets.menu} alt="" className='menu-icon' />
        <Link to={'/'}><img src={assets.logo} alt="" className='logo' /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" placeholder='Search' />
        <img src={assets.search} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img src={assets.profile_icon} alt="" className='user-icon' />
      </div>
    
    </nav>
  )
}

export default Navbar
