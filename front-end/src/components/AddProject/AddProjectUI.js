import React, {Component} from 'react';
import AddProject from './AddProject';
import Table from './Table';

class AddProjectUI extends Component {
    state = {
        projects: [],
    };

    removeProject = index => {
      const { projects } = this.state;
  
      this.setState({
          projects: projects.filter((project, i) => { 
              return i !== index;
          })
      });
    }

    handleSubmit = project => {
        this.setState({projects: [...this.state.projects, project]});
    }
  
    render() {
      const { projects } = this.state;
  
      return (
        <div className="container">
            <p>Add a project with a unique ID and API key.</p>
            <Table
                projectData={projects}
                removeProject={this.removeProject}
            />
            <h3>Add New</h3>
            <AddProject handleSubmit={this.handleSubmit} />
        </div>
      );
    }
  }
  
  export default AddProjectUI;