import React from 'react'
import MyButton from '../UI/button/MyButton'

const ExperienceItem = ({experience})=>{
  return(
    <li className='experience_info'>
      <ul className='experience_list'>
        <li className='experience_list-title'>{experience.company} ({experience.date})</li>
        {/* <li className='experience_list-date'>{experience.date}</li> */}
      </ul>
      <ul className='experience_list'>
        <li className='experience_list-title'>{experience.job}</li>
        <li>{experience.description}</li>
      </ul>
    </li>
  )
}

export default ExperienceItem;