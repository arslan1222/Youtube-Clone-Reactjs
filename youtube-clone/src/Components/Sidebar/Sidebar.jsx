import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets.js'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={assets.home} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={assets.game_icon} alt="" /> <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={assets.automobiles} alt="" /> <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={assets.sports} alt="" /> <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={assets.entertainment} alt="" /> <p>Entertainement</p>
        </div>
        <div className="side-link">
          <img src={assets.tech} alt="" /> <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={assets.blogs} alt="" /> <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={assets.news} alt="" /> <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className='side-link'>
          <img src={assets.gerard} alt="" /><p>Marcus Stoinis</p>
        </div>
        <div className='side-link'>
          <img src={assets.megan} alt="" /><p>Zinta</p>
        </div>
        <div className='side-link'>
          <img src={assets.tom} alt="" /><p>David Warner</p>
        </div>
        <div className='side-link'>
          <img src={assets.simon} alt="" /><p>Fill Salt</p>
        </div>
        <div className='side-link'>
          <img src={assets.cameron} alt="" /><p>Elisha</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
