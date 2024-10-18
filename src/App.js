import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import {useEffect, useState} from "react";
import ProjectsService from './API/ProjectsService'

function App() {
  // const [projects, setProjects] = useState(ProjectsService.getAll());
  // console.log(projects)
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
