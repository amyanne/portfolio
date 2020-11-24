import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProjects } from '../actions/index';
import ReactPlayer from "react-player"



export class Project extends Component {
    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        const projects = this.props.projects.map((element, i) => {
            return (
                <div key={i} className="projects">
        <h3>{element.name}</h3>
                 <ReactPlayer
                    url={element.url}/>
                </div>
              );
            });
        return (
            <div>
                <h2>Projects</h2>
                <div className="collection">
                    {projects}
                </div>
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
