import React, { Component } from 'react';
import AddProject from "../components/AddProject";
import ProjectsList from "../components/ProjectsList";

class ManageProject extends Component {

    render() {
        return (
          <div>
              <h2> Add a new project: </h2>
              <AddProject />
              <br />
              <h2> Select an existing project: </h2>
              <ProjectsList />
          </div>
        );
    }
}

export default ManageProject;