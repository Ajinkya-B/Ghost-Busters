import React from 'react';
import { render } from '@testing-library/react';
import DashboardWelcomePage from "../pages/DashboardWelcome.js";


describe("DashboardWelcome Component", function () {

    it("should have welcome message", function () {
        let { getByText } = render(<DashboardWelcomePage />);
        expect(getByText("Welcome to your Ghostboard!")).toMatchInlineSnapshot(`
            <h1>
            Welcome to your Ghostboard!
          </h1>
    `);
    });
});
