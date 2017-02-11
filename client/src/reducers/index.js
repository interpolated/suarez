import reduceReducers from 'reduce-reducers'
import projects from './reducers_project';
import setActiveProject from './reducers_active';

const rootReducer = reduceReducers(projects,setActiveProject);


export default rootReducer;
