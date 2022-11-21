/**
 * @jest-environment jsdom
 */

import React from 'react';
import "@testing-library/jest-dom";
import {cleanup, render} from '@testing-library/react';
import DashboardWelcomePage from "../pages/DashboardWelcome.js";
import {act} from "react-test-renderer";

it("navigates to Manage Projects page when you click button", () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
 
});


