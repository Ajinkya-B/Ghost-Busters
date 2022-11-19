// This is the Manage Project page.

import React from 'react';
import AddProject from "../components/AddProject";
import ProjectsList from "../components/ProjectsList";
import Navbar from "../components/Navbar";


export default function ManageProjects() {
    return (
      <div>
          <Navbar />
          <br />

          <h3> Add a new project: </h3>
          <AddProject />
          <br />
          <h3> Select an existing project: </h3>
          <ProjectsList />
      </div>
    );
}
