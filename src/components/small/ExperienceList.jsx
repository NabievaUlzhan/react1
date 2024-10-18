import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = ({experiences})=>{
  return(
    <ul>
      {experiences.map(experience=>
        <ExperienceItem experience={experience}></ExperienceItem>
      )}
    </ul>
  )
}

export default ExperienceList;