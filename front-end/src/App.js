import React, {Component} from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider} from "react-helmet-async";
import ThemeProvider from "./dashboard-components/theme";

import DashboardWelcomePage from "./pages/DashboardWelcome";
import Dashboard from './pages/Dashboard';
import ManageProjects from './pages/ManageProjects';
import Page404 from "./pages/Page404";

class App extends Component {
    render() {
        return (
            <ThemeProvider>
              <HelmetProvider>
                <Router>
                  <Routes>
                    <Route path='*' element={<Page404 />} />
                    <Route path='/' element={<DashboardWelcomePage />} />
                    <Route path='/Dashboard/:id' element={< Dashboard />} />
                    <Route exact path='/ManageProjects' element={< ManageProjects />} />
                  </Routes>
                </Router>
              </HelmetProvider>
            </ThemeProvider>
        )
  }

}

export default App;
