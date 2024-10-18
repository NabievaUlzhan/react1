import React, {useState} from 'react';
import Header from './Header'
import Top from './Top'
import SkillsForm from './small/SkillsForm'

const Skills = ()=>{
  // const skills = [
  //   {
  //     id: 1,
  //     title: 'JavaScript',
  //     percent: 40
  //   },
  //   {
  //     id: 2,
  //     title: 'HTML CSS',
  //     percent: 80
  //   },
  // ]
  const [skills, setSkills] = useState([
    {
      id: 1,
      title: 'JavaScript',
      percent: 40
    },
    {
      id: 2,
      title: 'HTML CSS',
      percent: 80
    },
  ])
  const maxWidth = 800

  function createSkill(newSkill) {
    setSkills([...skills, newSkill]);
    // setModal(false)
  }

  return(
    <div className="skills ">
      <Header></Header>
      <Top></Top>
      <div className="skills_content container">
        <div className='about_content'>
          <h1>Skills</h1>
          
          {skills.map(elem=>
            // <input type='range' />
            <div className='skills_range-wrap'>
              <div className='skills_range' key={elem.id} style={{width: maxWidth}} >
                <div style={{width: (maxWidth*elem.percent)/100, background: 'LimeGreen'}}>{elem.title}</div>
                </div>
            </div>
          )}
          <SkillsForm create={createSkill}></SkillsForm>
        </div>
      </div>
    </div>
  )
}

export default Skills