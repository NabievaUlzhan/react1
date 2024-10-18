import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const langs = [
    {code: 'en', lang: "English"},
    {code: 'ru', lang: "Russian"},
]

const LangSelector = ()=>{
  const {i18n} = useTranslation()

  const changeLanguage = (lng)=>{
    i18n.changeLanguage(lng)
  }

  return(
    <>
      {langs.map((lang)=>
        <button id="langs_btn" className={lang.code === i18n.lang?"selected":''} 
        key={lang.code} onClick={()=>changeLanguage(lang.code)}>{lang.lang}</button>
      )}
    </> 
  )
}

export default LangSelector