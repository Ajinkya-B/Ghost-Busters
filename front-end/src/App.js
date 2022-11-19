import React, {Component} from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider} from "react-helmet-async";

import DashboardWelcomePage from "./pages/DashboardWelcome";
import Dashboard from './pages/Dashboard';
import ManageProjects from './pages/ManageProjects';

class App extends Component {
    render() {
        return (
            <div>
              <HelmetProvider>
                <Router>
                  <Routes>
                    <Route path='/' element={<DashboardWelcomePage />} />
                    <Route path='/Dashboard/:id' element={< Dashboard />} />
                    <Route exact path='/ManageProjects' element={< ManageProjects />} />
                    {/*<Route path='/AnalyzeTranscripts/:id' element={< AnalyzeTranscripts />} />*/}
                  </Routes>
                </Router>
              </HelmetProvider>
            </div>
        )
  }

}

export default App;
