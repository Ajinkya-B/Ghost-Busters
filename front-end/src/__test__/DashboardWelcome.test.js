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


// These aren't working--it's not navigating to the specified page
describe('Dashboard Welcome Page', () => {
    it.skip('should navigate to Manage Projects', async () => {
        render(<DashboardWelcome/>, {wrapper: BrowserRouter});
        //expect(history.location.pathname).toBe('/');
        //fireEvent.click(screen.getByDisplayValue('Click me or "Manage Projects"!'));
        //fireEvent.click(screen.getByRole('href', { name: '/ManageProjects' }))
        await userEvent.click(screen.getByRole('link', {name: 'Click me or "Manage Projects"!'}))
        expect(screen.getByText(/add a new project/i)).toBeInTheDocument()
    })

    // it.skip('should navigate to Home from the Manage Projects page', () => {
    //     const history = createMemoryHistory({initialEntries: ['/ManageProjects']});
    //     render(
    //         <Router history={history}>
    //             <DashboardWelcome />
    //         </Router>
    //     );
    //     expect(history.location.pathname).toBe('/ManageProjects');
    //     //fireEvent.click(screen.getByRole('link', { name: 'Home' }));
    //     userEvent.click(screen.getByRole('link', { name: 'Home' }));
    //     expect(history.location.pathname).toBe('/');
    // })

})
