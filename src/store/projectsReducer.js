const defaultState = {
  projects: [],
  experience: []
}

const GET_PROJECTS = 'GET_PROJECTS'
const GET_EXPERIENCE = 'GET_EXPERIENCE'

export const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {...state, projects: [...state.projects, ...action.payload]}
    case GET_EXPERIENCE:
      return {...state, experience: [...state.experience, ...action.payload]}
    default:
      return state
  }
}

export const getProjectsAction = (payload) => ({type: GET_PROJECTS, payload})
export const getExperienceAction = (payload) => ({type: GET_EXPERIENCE, payload})
  