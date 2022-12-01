/**
 * @jest-environment jsdom
 */

import React from "react";
import {create} from "react-test-renderer";
import {MemoryRouter, Route, Router, Routes} from "react-router-dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ManageProjects from "../pages/ManageProjects.js";
import Page404 from "../pages/Page404.js";
import DashboardWelcomePage from "../pages/DashboardWelcome.js";
import Dashboard from "../pages/Dashboard.js";
import App from "../App.js"
import {createMemoryHistory} from "history";

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

    it('renders the Manage Projects page from Home', async() => {
        render(<App />);

        expect(screen.getByRole('link', {name: 'Home'}));

        await userEvent.click(screen.getByRole('link', {name: 'Manage Projects'}))
        expect(screen.getByRole('link', {name: 'Manage Projects'}));
    });

    // Axios error
    it.skip('renders the Home page from the Manage Projects page', async() => {
        render(
            <MemoryRouter initialEntries={['/ManageProjects']}>
                <ManageProjects />
            </MemoryRouter>
        );
        await userEvent.click(screen.getByRole('link', {name: 'Home'}));
        expect(screen.getByRole('link', {name: 'Home'}));
    });

    it.skip('correctly lands on an error page', async() => {
        const badRoute = '/some/bad/route'
        render(
            <MemoryRouter initialEntries={[badRoute]}>
                <ManageProjects />
            </MemoryRouter>
        );
        expect(screen.getByText(/sorry, page not found!/i)).toBeInTheDocument();
    });

});
