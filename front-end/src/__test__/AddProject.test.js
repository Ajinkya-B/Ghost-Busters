/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProject from "../components/AddProject.js"
import ProjectsList from "../components/ProjectsList.js";


describe("AddProject form", () => {
    it("should render the text input fields", () => {
        render(<AddProject />);
        expect(screen.getByRole("textbox", { name: /project name/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /project id/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /api key/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("should submit form data",() => {
        render(<AddProject />);

        // Testing that the input to the Project Name text field gets saved to the state
        const projectNameInput = screen.getByRole("textbox", { name: /project name/i });
        expect(projectNameInput).toBeEmptyDOMElement();
        userEvent.type(projectNameInput,"Project Name Test");
        expect(screen.getByDisplayValue("Project Name Test")).toBeInTheDocument();

        // Testing Project/Version ID text field
        const projectIDInput = screen.getByRole("textbox", { name: /project id/i });
        expect(projectIDInput).toBeEmptyDOMElement();
        userEvent.type(projectIDInput,"ProjectIDTest");
        expect(screen.getByDisplayValue("ProjectIDTest")).toBeInTheDocument();

        // Testing API Key text field
        const apiKeyInput = screen.getByRole("textbox", { name: /api key/i });
        expect(apiKeyInput).toBeEmptyDOMElement();
        userEvent.type(apiKeyInput,"ApiKeyTest");
        expect(screen.getByDisplayValue("ApiKeyTest")).toBeInTheDocument();

        // Testing Submit button; the form text fields should be empty after submission
        const submitButton = screen.getByRole("button", { name: /submit/i });
        userEvent.click(submitButton);
        expect(projectNameInput).toBeEmptyDOMElement();
        expect(projectIDInput).toBeEmptyDOMElement();
        expect(apiKeyInput).toBeEmptyDOMElement();

    });

    // TODO
    it.skip('should display the new project on the projects list', () => {
        render(<ProjectsList />);
        expect(screen.getByText("Project Name Test")).toBeInTheDocument();
    })
});
