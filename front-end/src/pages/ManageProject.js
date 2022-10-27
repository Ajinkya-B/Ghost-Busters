import React, { Component } from 'react';
import Table from '../components/Table';
import AddProject from "../components/AddProject";


class ManageProject extends Component {
    render() {
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
            <AddProject />

            <br />

            <h2> Select an existing project: </h2>
              <Table
                  // projectData={projects}
                  // selectProject={this.selectProject}
                  // removeProject={this.removeProject}
              />
          </div>
        );
    }
}

export default ManageProject;