import { SET_ACTIVE_PROJECT } from '../actions/action_types.js'

export default function setActiveProject(state = '111', action){
  switch(action.type){
  
  case SET_ACTIVE_PROJECT:
    const newState = {} 
    newState.id = action.id

    return newState
  

  default:
    return state
  }
}


