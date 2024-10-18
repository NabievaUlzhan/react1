import React from 'react';
import {Link} from "react-router-dom";
import face from './pictures/face.png'
import avatar from './pictures/avatar.svg'

const Header = ()=>{
  return(
    <div className="header">
      <nav className='header_nav'>
        <div className="header_nav-ava">
          <img src={avatar} alt="" />
          <h3>Ulzhan Nabiyeva</h3>
        </div>
          
        
        <ul className='header_nav-list'>
          <Link className='link_style header_list-li' to="/about"><li className='header_list-li'>About</li></Link>
          <Link className='link_style header_list-li' to="/experience"><li className='header_list-li'>Experience</li></Link>
          <Link className='link_style header_list-li' to="/skills"><li className='header_list-li'>Skills</li></Link>
          <Link className='link_style header_list-li' to="/projects"><li className='header_list-li'>Projects</li></Link>
          <Link className='link_style header_list-li' to="/connect"><li className='header_list-li'>Connect</li></Link>
          
        </ul>
        <Link className='link_style header_nav-li' to="/"><li className='header_list-li'>Go Back</li></Link>
      </nav>
    </div>
  )
}

export default Header;