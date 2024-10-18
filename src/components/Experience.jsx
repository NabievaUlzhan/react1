import React, { Suspense, lazy } from 'react';
import Header from './Header'
import {useEffect, useState} from "react";
import {fetchExperience} from '../API/ProjectsService'
import {Provider, useDispatch, useSelector} from "react-redux";
import Top from './Top'
import MyLoader from './UI/loader/MyLoader';

const Experience = ()=>{
  const ExperienceList = React.lazy(() => import('./small/ExperienceList'));
  const dispatch = useDispatch();
  const experience = useSelector(state =>state.projectsReducer.experience)
  
  function showExperience(){
    return dispatch(fetchExperience())
  }
  useEffect(() => {

    showExperience()
  }, [])
  // const [projects, setProjects] = useState(ProjectsService.getAll());
  // console.log(...projects)
  return(
    <div className="projects ">
      <Header></Header>
      <Top></Top>
        <div className="container ">
          <div className="content about_content">
            <h1>Experience</h1>
            <Suspense fallback={<MyLoader></MyLoader>}>
              <ExperienceList experiences={experience}></ExperienceList>  
            </Suspense>
          </div>
        </div>
        
    </div>
  )
}

export default Experience

