import React, {Component} from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Helmet, HelmetProvider} from "react-helmet-async";
import ThemeProvider from "./components/dashboard-components/theme";

import DashboardWelcomePage from "./pages/DashboardWelcome";
import Dashboard from './pages/Dashboard';
import ManageProjects from './pages/ManageProjects';
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar.js";

class App extends Component {
    render() {
        return (
            <ThemeProvider>
              <HelmetProvider>
                <Helmet>
                    <title> Ghostboard </title>
                </Helmet>

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
