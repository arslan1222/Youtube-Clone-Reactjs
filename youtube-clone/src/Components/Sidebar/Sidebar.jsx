import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets.js'

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-links">
        <div onClick={()=>setCategory(0)} className={`side-link ${category === 0 ? 'active' : ''}`}>
          <img src={assets.home} alt="" /> <p>Home</p>
        </div>
        <div onClick={()=>setCategory(20)} className={`side-link ${category === 20 ? 'active' : ''}`}>
          <img src={assets.game_icon} alt="" /> <p>Gaming</p>
        </div>
        <div onClick={()=>setCategory(2)} className={`side-link ${category === 2 ? 'active' : ''}`}>
          <img src={assets.automobiles} alt="" /> <p>Automobiles</p>
        </div>
        <div onClick={()=>setCategory(17)} className={`side-link ${category === 17 ? 'active' : ''}`}>
          <img src={assets.sports} alt="" /> <p>Sports</p>
        </div>
        <div onClick={()=>setCategory(24)} className={`side-link ${category === 24 ? 'active' : ''}`}>
          <img src={assets.entertainment} alt="" /> <p>Entertainement</p>
        </div>
        <div onClick={()=>setCategory(28)} className={`side-link ${category === 28 ? 'active' : ''}`}>
          <img src={assets.tech} alt="" /> <p>Technology</p>
        </div>
        <div onClick={()=>setCategory(10)} className={`side-link ${category === 10 ? 'active' : ''}`}>
          <img src={assets.music} alt="" /> <p>Music</p>
        </div>
        <div onClick={()=>setCategory(22)} className={`side-link ${category === 22 ? 'active' : ''}`}>
          <img src={assets.blogs} alt="" /> <p>Blogs</p>
        </div>
        <div onClick={()=>setCategory(25)} className={`side-link ${category === 25 ? 'active' : ''}`}>
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
