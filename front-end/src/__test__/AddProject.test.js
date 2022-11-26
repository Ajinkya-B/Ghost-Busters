/**
 * @jest-environment jsdom
 */

import React from "react";
import {screen, render, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import AddProject from "../components/AddProject.js"

describe("AddProject Form", () => {
    it("should render the text fields", () => {
        render(<AddProject />);
        expect(screen.getByRole("textbox", { name: /project name/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /version id/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /api key/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("should submit correct form data", async () => {
        const mockSave = jest.fn();
        let props = {
                project_name: "Project Name Test",
                version_id: "VersionIDTest",
                api_key: "APIKeyTest",
                transcripts: [],
        }
        render(<AddProject {...mockSave} />);

        fireEvent.input(screen.getByRole("textbox", { name: /project name/i }), {
            target: { value: "Project Name Test" }
        });
        fireEvent.input(screen.getByRole("textbox", { name: /version id/i }), {
            target: { value: "VersionIDTest" }
        });
        fireEvent.input(screen.getByRole("textbox", { name: /api key/i }), {
            target: { value: "APIKeyTest" }
        });
        fireEvent.submit(screen.getByRole("button", { name: /submit/i }));

        await waitFor(() =>
            expect(mockSave).toHaveBeenCalledWith({
                project_name: "Project Name Test",
                version_id: "VersionIDTest",
                api_key: "APIKeyTest",
                transcripts: [],
            })
        );
    });
});