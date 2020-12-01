import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getProject} from '../actions';

export class ProjectShow extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getProject(id);
    }

  render() {
      console.log(this.props)
    return (
      <div>
        <h3>{ this.props.project.name }</h3>
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
