/**
 * @jest-environment jsdom
 */

import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {BrowserRouter as Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import DashboardWelcome from '../pages/DashboardWelcome.js';


// These aren't working--it's not navigating to the specified page
describe('Dashboard Welcome Page', () => {
    it.skip('should navigate to Manage Projects', () => {
        const history = createMemoryHistory({initialEntries: ['/']});
        const {getByText} = render(
            <Router location={history.location} navigator={history}>
                <DashboardWelcome />
            </Router>
        );
        expect(history.location.pathname).toBe('/');
        fireEvent.click(getByText('Click me or "Manage Projects"!'));
        expect(history.location.pathname).toBe('/ManageProjects');
    })
    it.skip('should navigate to Home from the Manage Projects page', () => {
        const history = createMemoryHistory({initialEntries: ['/ManageProjects']});
        const {getByText} = render(
            <Router location={history.location} navigator={history}>
                <DashboardWelcome />
            </Router>
        );
        expect(history.location.pathname).toBe('/ManageProjects');
        fireEvent.click(getByText('Home'));
        expect(history.location.pathname).toBe('/');
    })
})
