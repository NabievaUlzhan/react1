
import Skills from '../components/Skills'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Start from '../components/Start'
import Connect from '../components/Connect'
import ProjectsItemById from '../components/small/ProjectsItemById'

export const routes = [
  {path: '/', element: <Start/>, exact: true},
  // {path: '/main', element: <Main/>, exact: true},
  {path: '/about', element: <About/>, exact: true},
  {path: '/skills', element: <Skills/>, exact: true},
  {path: '/experience', element: <Experience/>, exact: true},
  {path: '/projects', element: <Projects/>, exact: true},
  {path: '/connect', element: <Connect/>, exact: true},
  {path: '/projects/:id', element: <ProjectsItemById/>, exact: true},
]

// export const publicRoutes = [
//   {path: '/login', element: <LoginPage/>, exact: true},
// ]
