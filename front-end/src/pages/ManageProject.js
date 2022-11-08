import React, {useEffect, useState} from 'react';
import AddProject from "../components/AddProject";
import ProjectsList from "../components/ProjectsList";


export default function ManageProject() {
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
