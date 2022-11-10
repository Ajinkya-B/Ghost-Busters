import React from 'react';
import Project from "../components/Project";

const Dashboard = (props) => {
    let selectProject= props.selectProject;
  return (
    <div>
      <Project{...props} selectproject={selectProject}/>
    </div>
  );
};

export default Dashboard;
