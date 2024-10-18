import React, { Suspense, lazy } from 'react';
import Header from './Header'
import '../hooks/i18n'
import { useTranslation } from 'react-i18next';
import LangSelector from '../hooks/LangSelector'
import Top from './Top'

const About = ()=>{
  const {t} = useTranslation()
  
  return(
    <div className='about'>
      
        <Header></Header>
        <Top></Top>
        <div className="container">
          <div className="about_content">
            <h1>{t('aboutH2')}</h1>
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            <p>{t('p4')}</p>
          </div>
        </div>
    </div>
  )
}

export default About

