import React, { Suspense, lazy } from 'react';
import Header from './Header'
// import ProjectsList from './small/ProjectsList'
import {useEffect, useState} from "react";
import {fetchProjects} from '../API/ProjectsService'
import {Provider, useDispatch, useSelector} from "react-redux";
import Top from './Top'
import MyLoader from './UI/loader/MyLoader';

const Projects = ()=>{
  const ProjectsList = React.lazy(() => import('./small/ProjectsList'));
  const dispatch = useDispatch();
  const projects = useSelector(state =>state.projectsReducer.projects)
  // projects.length = 4

  function showProjects(){
    console.log(projects)
    return dispatch(fetchProjects())
  }

  // useEffect(showProjects())
  // showProjects()
  useEffect(() => {
    showProjects()
  }, [])

  // const [projects, setProjects] = useState(ProjectsService.getAll());
  // console.log(...projects)
  return(
    <div className="projects ">
      <Header></Header>
      <Top></Top>
      
        <div className="container">
          <div className='about_content'>
            <h1>Projects</h1>
            <Suspense fallback={<MyLoader></MyLoader>}>
              <ProjectsList projects={projects}></ProjectsList>
            </Suspense>
          </div>
        </div>
      
        
    </div>
  )
}

export default Projects;