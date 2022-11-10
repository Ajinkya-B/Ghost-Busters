import React, {Component} from 'react';
import './styles/App.css';
import './styles/index2.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import ManageProject from './pages/ManageProject';
import AnalyzeTranscripts from './pages/AnalyzeTranscripts';
import Project from './components/Project';


function App (props) {
  const [project, setProject] = React.useState()

  async function selectProject(project = null) {
    setProject(project);
  }

  async function logout() {
    setProject(null);
  }



    return (
      <div>
        <Router>
          <Navbar project={project}/>
          <br />
          <Routes>
            <Route path='/Dashboard/:id' element={< Dashboard{...props} selectProject={selectProject}/>} />
            <Route exact path='/ManageProject' element={< ManageProject />} />


            <Route path='/AnalyzeTranscripts/:id' element={< AnalyzeTranscripts{...props} project={project} />} />
          </Routes>
        </Router>
      </div>


    );
  }


export default App;
