import React,{useState, useEffect} from 'react'
import MyButton from '../UI/button/MyButton'
import { Link } from '@react-email/link'

const ProjectsItem = ({project})=>{
  // const pictures = [exam1, exam2, exam3, exam4]

  // const [poster, setPoster] = useState('')
  // function randomPoster(pictures, description){
  //   pictures.forEach(element => {
  //     return setPoster((element)=> element == description)
  //   });
  // }

  // useEffect(() => {
  //   randomPoster(pictures, project.description)
  // }, [])

  return(
      <li className='projects_list'>
        <Link href={project.url}>
          <img src={project.poster} />
        </Link>
        <h3>{project.description}</h3>
        <p>{project.title}</p>
        <Link href={project.githubUrl}><button>gitHub</button></Link>
        {/* <p>{project.url}</p>
        <p></p> */}
      </li>    

      
  )
}

export default ProjectsItem;