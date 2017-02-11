import { UPDATE_PROJECT,REMOVE_PROJECT,ADD_PROJECT,FETCH_PROJECTS } from '../actions/action_types.js'
import { initialState as intialProjects } from '../initialState.js'
import {store} from '../index.js'
import * as _ from 'lodash'

export default function projects(state = intialProjects, action){
  switch(action.type){
  
  case UPDATE_PROJECT:
    const entity = action.entity
    const id = action.id
    const property = action.property
    const payload = action.payload
    const y = {[entity]:{byId:{[id]:{[property]:payload}}}}
    return _.merge(state,y) 




  case ADD_PROJECT:
    return [...state, action.project]

  case REMOVE_PROJECT:
    return state.filter(project=>
      project.id !== action.id
  )

    
  default:
    return state
  }
}