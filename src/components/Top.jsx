import React from "react";
import '../hooks/i18n'
import { useTranslation } from 'react-i18next';
import LangSelector from '../hooks/LangSelector'

const Top = ()=>{
  const setDarkMode = ()=>{
    document.querySelector('body').setAttribute('data-theme', 'dark')
  }
  const setLightMode = ()=>{
    document.querySelector('body').setAttribute('data-theme', 'light')
  }
  
  const toggleTheme = (e)=>{
    if(e.target.checked == true) setDarkMode()
    else setLightMode()
  }

  return(
    <div className="top">
      <LangSelector></LangSelector>
      
      <div className="dark_mode">
        <div className="dark_switch-wrap">
          <input className="dark_mode-switch" type="checkbox" onChange={toggleTheme}/>
          <div className="circle"></div>
        </div>
        
      </div>
    </div>
  )
}

export default Top;