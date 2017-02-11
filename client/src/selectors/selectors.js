
export const getActiveProject = (state) => {
  console.log(state.projects)
  console.log(state.activeProject)
  const activeSectionIds  =  state.projects.byId[state.activeProject].sections
  return activeSectionIds.map((sectionId)=>{
  Object.assign({}, 
      {properties:state.sections.byId[sectionId]},
      {geometry:state.geometries.byId[sectionId]},
      {id:sectionId}
    )
  })  
}

export const getActiveSection = (state) => {
  return Object.assign({}, 
      {properties:state.sections.byId[state.activeSection]},
      {geometry:state.geometries.byId[state.activeSection]},
      {id:state.activeSection}
    )
}

export const getTypes = (state) => {
  if(state.types.byId===undefined||null||state.types.byId.length == 0){
    return []
  }
  return state.types.byId
}
