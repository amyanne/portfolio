import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProjects } from '../actions/index';


export class Project extends Component {
    componentDidMount() {
        this.props.getProjects();
    }

  render() {
    console.log("getting hit")
    console.log(this.props)
    return (
      <div>
        { <h3>{ "hi"}</h3> }
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        projects: state.projectReducer.projects
    }
}

  

export default connect(mapStateToProps, { getProjects })(Project);
