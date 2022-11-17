import React, {useEffect, useState} from 'react';
import AddProject from "../components/AddProject";
import ProjectsList from "../components/ProjectsList";
import Navbar from "../components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import AnalyzeTranscripts from "./AnalyzeTranscripts";


export default function ManageProject() {
    return (
      <div>
          {/*<Router>*/}
              <Navbar />
              <br />
              {/*<Routes>*/}
              {/*    <Route path='/Dashboard/:id' element={< Dashboard/>} />*/}
              {/*    <Route exact path='/ManageProject' element={< ManageProject />} />*/}


              {/*    <Route path='/AnalyzeTranscripts/:id' element={< AnalyzeTranscripts />} />*/}
              {/*</Routes>*/}
          {/*</Router>*/}

          <h2> Add a new project: </h2>
          <AddProject />
          <br />
          <h2> Select an existing project: </h2>
          <ProjectsList />
      </div>
    );
}
