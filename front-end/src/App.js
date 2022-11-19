import React, {Component} from 'react';
import './styles/App.css';
import './styles/index2.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider} from "react-helmet-async";

import DashboardWelcomePage from "./pages/DashboardWelcome";
import Dashboard from './pages/Dashboard';
import ManageProject from './pages/ManageProject';

class App extends Component {
    render() {
        return (
            <div>
              <HelmetProvider>
                <Router>
                  <Routes>
                    <Route path='/' element={<DashboardWelcomePage />} />
                    <Route path='/Dashboard/:id' element={< Dashboard />} />
                    <Route exact path='/ManageProject' element={< ManageProject />} />
                    {/*<Route path='/AnalyzeTranscripts/:id' element={< AnalyzeTranscripts />} />*/}
                  </Routes>
                </Router>
              </HelmetProvider>
            </div>
        )
  }

}

export default App;
