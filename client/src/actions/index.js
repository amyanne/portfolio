
const baseUrl = 'http://localhost:3001'

export const getProjects = () => {
    return dispatch => {
        return fetch(baseUrl + '/projects')
        .then(response => response.json())
        .then(projects => {
            return dispatch({ type: "GET_PROJECTS", projects })
        })
    }
}