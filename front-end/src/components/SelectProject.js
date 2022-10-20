import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';


class SelectProject extends Component {
    state = {
        projects: []
    };

    removeProject = index => {
        const { projects } = this.state;
    
        this.setState({
            projects: projects.filter((proj, i) => { 
                return i !== index;
            })
        });
    }

    selectProject = index => {
        const { projects } = this.state;
    
        this.setState({
            projects: projects.filter((proj, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = proj => {
        this.setState({projects: [...this.state.projects, proj]});
    }

    render() {
      const { projects } = this.state;
        
        return (
          <div
            style={{
              //display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              //height: '90vh'
            }}
          >
            <h2> Add a new project: </h2>
            <Form handleSubmit={this.handleSubmit} />

            <br />

            <h2> Select an existing project: </h2>
            <Table
              projectData={projects}
              selectProject={this.selectProject}
              removeProject={this.removeProject}
            />
          </div>
        );
    }
}

export default SelectProject;