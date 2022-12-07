/**
 * @jest-environment jsdom
 */

import React from "react";
import {create} from "react-test-renderer";
import {MemoryRouter, Route, Routes} from "react-router-dom";

import ManageProjects from "../pages/ManageProjects.js";
import Page404 from "../pages/Page404.js";
import DashboardWelcomePage from "../pages/DashboardWelcome.js";
import Dashboard from "../pages/Dashboard.js";
import App from "../App.js"


describe('App', () => {
    it("renders the Navbar navigation correctly", async() => {
        let renderer = create(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/ManageProjects" element={<ManageProjects />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path='/' element={<DashboardWelcomePage />} />
                    <Route path='/Dashboard/:id' element={< Dashboard />} />
                </Routes>
            </MemoryRouter>
        );
        expect(renderer.toJSON()).toMatchSnapshot();
    });

});
