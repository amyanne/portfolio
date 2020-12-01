
const initialState = {
    projects: [],
    project: {}
}
const projectReducer = (state = initialState, action) => {
    switch(action.type) {

        case "GET_PROJECT":
            return {
                ...state, project: action.project
                
            }
        
        
        case "GET_PROJECTS":
            return {
                ...state, projects: action.projects
            }
        default:
            return state;
    }
}

export default projectReducer;