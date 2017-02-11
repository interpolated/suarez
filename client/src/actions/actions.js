// must be a list of actions
//actions for a single project
import { SET_ACTIVE_PROJECT, GET_ACTIVE_PROJECT, UPDATE_PROJECT,REMOVE_PROJECT,ADD_PROJECT,FETCH_PROJECTS } from './action_types.js'
import {getState, dispatch} from 'redux'
import {store} from '../index.js'

export function updateProject(entity,id,property,payload){
  return {
    type:UPDATE_PROJECT,
    entity:entity,
    property:property,
    id:id,
    payload:payload
  }
}

export function removeProject(id){
  return {
    type:REMOVE_PROJECT,
    id:id
  }
}

export function addProject(id,project){
  return {
    type:ADD_PROJECT,
    id:id,
    project:project
  }
}

export function setActiveProject(id){
  return{
    type:SET_ACTIVE_PROJECT,
    id:id
  }
}

// export function getActiveProject(){
//         return {
//             type : GET_ACTIVE_PROJECT,
//             id : state.activeProject
//         };
//     }




// //actions for many projects
// export function fetchProjects(){
//   return {
//     type: FETCH_PROJECTS,
//     payload: payload
//   }
// }