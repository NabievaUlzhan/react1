import React, {useState} from 'react';

const SkillsForm = ({create}) => {

  const [skill, setSkill] = useState({title: '', percent: ''})

  function addSkill(event){
    event.preventDefault();
    const newSkill ={
      ...skill,
      id: Date.now()
    }
    create(newSkill);
    setSkill({title: '', percent: ''})
  }

  return (
    <form className='skills_form'>
      <input type="text" placeholder='title' value={skill.title} onChange={e=>setSkill({...skill, title: e.target.value})} />
      <input type="text" placeholder='percentage' value={skill.percent} onChange={e=>setSkill({...skill, percent: e.target.value})} />
      
      <button onClick={addSkill}>Add</button>
    </form>
  );
};

export default SkillsForm