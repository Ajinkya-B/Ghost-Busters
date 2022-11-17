import React from 'react';
import AddProject from "../components/AddProject";
import ProjectsList from "../components/ProjectsList";
import Navbar from "../components/Navbar";


export default function ManageProject() {
    return (
      <div>
          <Navbar />
          <br />

          <h2> Add a new project: </h2>
          <AddProject />
          <br />
          <h2> Select an existing project: </h2>
          <ProjectsList />
      </div>
    );
}
