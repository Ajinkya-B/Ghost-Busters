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


class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <Navbar />
          <br />
          <Routes>
            <Route exact path='/Dashboard/:id' element={< Dashboard />} />
            <Route exact path='/ManageProject' element={< ManageProject />} />
            <Route  path='/projects/:id' element={<Project />} />

            <Route path='/projects/:id/AnalyzeTranscripts' element={< AnalyzeTranscripts />} />
          </Routes>
        </Router>
      </div>


    );
  }
}

export default App;
