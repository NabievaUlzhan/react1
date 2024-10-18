import React from "react";
import ProjectsItem from "./ProjectsItem";

const ProjectsList = ({projects})=>{
  return(
    <ul className="projects_list-wrap">
      {projects.map((project)=>
        <ProjectsItem project={project} key={project.id}></ProjectsItem>
      )}
    </ul>
  )
}

export default ProjectsList;