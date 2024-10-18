import React from 'react'
import MyButton from '../UI/button/MyButton'


const ProjectsItemById = ({project})=>{
  return(
    <li>
      <img src="" alt="" />
      <h3>{project.title} | {project.type}</h3>
      <p>{project.description}</p>
      {/* <MyButton><Link to="/projects/:id">More info</Link></MyButton> */}
    </li>
  )
}

export default ProjectsItemById;