import React, {Component} from 'react';
import './App.css';
import './index2.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './Navbar/Navbar';

import Dashboard from './components/Dashboard';
import SelectProject from './components/SelectProject';
import UploadTranscripts from './components/UploadTranscripts';
import AnalyzeTranscripts from './components/AnalyzeTranscripts';


class App extends Component {
  render () {
    return (
      <div> 
        <Router>
          <Navbar />
          <br />
          <Routes>
            <Route exact path='/Dashboard' element={< Dashboard />} />
            <Route exact path='/SelectProject' element={< SelectProject />} />
            <Route exact path='/UploadTranscripts' element={< UploadTranscripts />} />
            <Route exact path='/AnalyzeTranscripts' element={< AnalyzeTranscripts />} />
          </Routes>
        </Router>
      </div>
    );
  }
}


export default App;