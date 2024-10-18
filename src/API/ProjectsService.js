// import axios from "axios";

// export default class ProjectsService {
//   static async getAll() {
//     return await axios.get('https://jsonplaceholder.typicode.com/posts')
//   }  
//   static async getById(id) {
//     return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   }  
//   static async getComments(id) {
//     return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//   }
// }

// import axios from "axios";

// export default class ProjectsService {
//   static async getAll() {
//     try {
//       const response = await axios.get('https://66c07427ba6f27ca9a56aa44.mockapi.io/projects')
//       return response.data
//     } catch (e) {
//       console.log(e)
//    }
//   }
// }

import { getProjectsAction } from "../store/projectsReducer"
import { getExperienceAction } from "../store/projectsReducer"

export const fetchProjects = () => {
  return function (dispatch) {
    fetch(`https://66c07427ba6f27ca9a56aa44.mockapi.io/projects`)
    .then(response => response.json())
    .then(json => dispatch(getProjectsAction(json)))
  }
}

export const fetchExperience = ()=>{
  return function(dispatch){
    fetch('https://66c07427ba6f27ca9a56aa44.mockapi.io/experience')
    .then(response => response.json())
    .then(json=>dispatch(getExperienceAction(json)))
  }
}

