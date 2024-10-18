import React from 'react';
import Header from './Header'
import {Link} from "react-router-dom";

const Start = ()=>{
  return(
    <header className='start'>
      {/* <Header></Header> */}
      <div className='start_bg'></div>

      <div className="start_content-wrap">
        <div className="start_content">
          <h1>HI. I'm Ulzhan.</h1>
          <p>I'm a creative account director who builds long-lasting client relationships by delivering award-winning work.</p>
          <Link to='/about'><button>Know more</button></Link>
        </div>
      </div>
    </header>
  )
}

export default Start;
