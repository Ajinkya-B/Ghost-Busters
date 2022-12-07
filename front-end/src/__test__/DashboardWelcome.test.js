/**
 * @jest-environment jsdom
 */

import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {create} from "react-test-renderer";
import {createMemoryHistory} from "history";
import {
    BrowserRouter as Router,
    MemoryRouter,
    Routes,
    Route,
    createMemoryRouter,
    BrowserRouter
} from "react-router-dom";
import DashboardWelcome from '../pages/DashboardWelcome.js';
import ManageProjects from "../pages/ManageProjects";
import Page404 from "../pages/Page404.js";
import userEvent from "@testing-library/user-event";


// These aren't working at the moment--the tests aren't able to mock the navigation
describe('Dashboard Welcome Page', () => {
    it.skip('should navigate to Manage Projects', async () => {
        const history = createMemoryHistory({initialEntries: ['/']});
        render(
            <Router history={history}>
                <DashboardWelcome />
            </Router>
        );
        expect(history.location.pathname).toBe('/');
        await userEvent.click(screen.getAllByRole('link', {name: 'Manage Projects'})[1])
        expect(screen.getByText(/add a new project/i)).toBeInTheDocument()
    })

    it.skip('should navigate to Home from the Manage Projects page', async () => {
        const history = createMemoryHistory({initialEntries: ['/ManageProjects']});
        render(
            <Router history={history}>
                <DashboardWelcome />
            </Router>
        );
        expect(history.location.pathname).toBe('/ManageProjects');
        await userEvent.click(screen.getByRole('link', { name: 'Home' }));
        expect(history.location.pathname).toBe('/');
    })

})
