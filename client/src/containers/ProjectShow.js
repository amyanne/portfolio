import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getProject} from '../actions';
import ReactPlayer from "react-player"

export class ProjectShow extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getProject(id);
    }

  render() {
      console.log(this.props.project.url)
    return (
      <div>
        { <h1>{ this.props.project.name }</h1> }
            <   ReactPlayer url={this.props.project.url}/>
            <h3> {this.props.project.details}</h3>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        project: state.projectReducer.project
    }
}

export default connect(mapStateToProps, {getProject})(ProjectShow);
