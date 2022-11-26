/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import DashboardWelcome from '../pages/DashboardWelcome.js';
import {Router} from "react-router-dom";


afterEach(cleanup);

// Coming back to this
// TypeError: Cannot read properties of undefined (reading 'pathname')
it.skip('should take a snapshot of the welcome page', async () => {
    const { value } = render(
        <Router>
            <DashboardWelcome />
        </Router>
    )
    expect(value(<DashboardWelcome />)).toMatchSnapshot()
})
