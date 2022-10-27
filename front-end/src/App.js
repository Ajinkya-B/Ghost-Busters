import React, {Component} from 'react';
import './styling/App.css';
import './styling/index2.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './Navbar/Navbar';

import Dashboard from './pages/Dashboard';
import ManageProject from './pages/ManageProject';
import UploadTranscripts from './pages/UploadTranscripts';
import AnalyzeTranscripts from './pages/AnalyzeTranscripts';


class App extends Component {
  render () {
    return (
      <div> 
        <Router>
          <Navbar />
          <br />
          <Routes>
            <Route exact path='/Dashboard' element={< Dashboard />} />
            <Route exact path='/ManageProject' element={< ManageProject />} />
            <Route exact path='/UploadTranscripts' element={< UploadTranscripts />} />
            <Route exact path='/AnalyzeTranscripts' element={< AnalyzeTranscripts />} />
          </Routes>
        </Router>
      </div>
    );
  }
}


export default App;