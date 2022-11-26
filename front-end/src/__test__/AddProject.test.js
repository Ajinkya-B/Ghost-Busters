/**
 * @jest-environment jsdom
 */

import React from "react";
import {screen, render, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import AddProject from "../components/AddProject.js"


let props;
beforeEach(() => {
    props = {
        project_name: "Project Name Test",
        version_id: "VersionIDTest",
        api_key: "APIKeyTest",
        transcripts: []
    }
});

describe("AddProject form", () => {
    it("should render the text input fields", () => {
        render(<AddProject />);
        expect(screen.getByRole("textbox", { name: /project name/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /version id/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /api key/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("should submit form data",() => {
        const mockSubmit = jest.fn();

        let props = {
                project_name: "Project Name Test",
                version_id: "VersionIDTest",
                api_key: "APIKeyTest",
                transcripts: [],
        }

        render(<AddProject {...mockSubmit} />);

        fireEvent.input(screen.getByRole("textbox", { name: /project name/i }), {
            target: { value: "Project Name Test" }
        });
        fireEvent.input(screen.getByRole("textbox", { name: /version id/i }), {
            target: { value: "VersionIDTest" }
        });
        fireEvent.input(screen.getByRole("textbox", { name: /api key/i }), {
            target: { value: "APIKeyTest" }
        });
        fireEvent.click(screen.getByRole("button", { name: /submit/i }));

        // The mock function is called twice
        expect(mockSubmit.mock.calls.length).toBe(1);

        expect(mockSubmit).toHaveBeenCalledWith({
            project_name: "Project Name Test",
            version_id: "VersionIDTest",
            api_key: "APIKeyTest",
            transcripts: [],
        })

        // await waitFor(() =>
        //
        //     expect(mockSubmit).toHaveBeenCalledWith({
        //         project_name: "Project Name Test",
        //         version_id: "VersionIDTest",
        //         api_key: "APIKeyTest",
        //         transcripts: [],
        //     })
        // );
    });
});
