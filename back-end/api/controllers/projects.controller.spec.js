import ProjectsController from "./projects.controller.js";
import { OutputBoundaryInterface } from "../../interfaces/output-boundary-interface.js";
import { InputBoundaryInterface } from "../../interfaces/input-boundary-interface.js";
import ProjectsDAO from "../../dao/projectsDAO.js";

jest.mock("../../services/projects.service.js");
jest.mock("../../interfaces/input-boundary-interface.js");
jest.mock("../../interfaces/output-boundary-interface.js");
jest.mock("../../helpers/outputDataBoundary.js");

const mockResponse = () => {
    let res = {};
    res = {
        status: () => res,
        json: jest.fn().mockImplementation((obj) => obj),
        error: "error",
    };
    return res;
};

let interactor;
let outputBoundary;
let dao;


describe("ProjectsController", () => {
    describe("Set Output Boundary", () => {
        it('should correctly throw an error', function () {
            outputBoundary = new InputBoundaryInterface();
            const t = () => {
                ProjectsController.setOutputBoundary(outputBoundary)
            }
            expect(t).toThrow(Error("not an OutputBoundary"))

        });
    });

    describe("Set Projects Interactor", () => {
        it('should correctly throw an error', function () {
            interactor = new OutputBoundaryInterface();
            const t = () => {
                ProjectsController.setProjectInteractor(interactor);
            }
            expect(t).toThrow(Error("not an InputBoundary"))

        });
    });

    beforeEach(() => {
        outputBoundary = OutputBoundaryInterface;
        interactor = new InputBoundaryInterface();
        ProjectsController.setProjectInteractor(interactor);
        ProjectsController.setOutputBoundary(outputBoundary);
        dao = new ProjectsDAO();
        jest.clearAllMocks();
    });

    describe("Api Get Filtered Projects", () => {
        it("Should correctly get a project ", async () => {
            const res = mockResponse();
            interactor.getFilteredProjects = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: 200,
                data: "meow",
            });
            await ProjectsController.apiGetFilteredProjects(dao, {}, res, {});
            expect(interactor.getFilteredProjects).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("meow");
        });

        it("Should correctly throw a error occured in the lower structure", async () => {
            const res = mockResponse();
            interactor.getFilteredProjects = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: 500,
                data: "could not find meow",
            });
            await ProjectsController.apiGetFilteredProjects(dao, {}, res, {});
            expect(res.json).toHaveBeenCalledWith("could not find meow");
        });

        it("Should correctly throw a error occured inside method body", async () => {
            const res = mockResponse();
            interactor.getFilteredProjects = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await ProjectsController.apiGetFilteredProjects(dao, {}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api Create Project", () => {
        it("Should correctly create a project ", async () => {
            const res = mockResponse();
            interactor.createProject = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: 200,
                data: "successfully created project",
            });
            await ProjectsController.apiCreateProject(dao,{}, res, {});
            expect(interactor.createProject).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("successfully created project");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            interactor.createProject = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await ProjectsController.apiCreateProject(dao,{}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api Delete Project", () => {
        it("Should correctly delete a project ", async () => {
            const res = mockResponse();
            interactor.deleteProject = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: 200,
                data: "successfully deleted project",
            });
            await ProjectsController.apiDeleteProject(dao,{body:{project_name: "meow"}}, res, {});
            expect(interactor.deleteProject).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("successfully deleted project");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            interactor.deleteProject = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await ProjectsController.apiDeleteProject(dao,{body:{project_name: "meow"}}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });
    
    describe("Api Get Project By Id", () => {
        it("Should correctly get project by id ", async () => {
            const res = mockResponse();
            interactor.getProjectbyID = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: 200,
                data: "meow",
            });
            await ProjectsController.apiGetProjectByID(dao, {params:{}}, res, {});
            expect(interactor.getProjectbyID).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("meow");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            interactor.getProjectbyID = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await ProjectsController.apiGetProjectByID(dao,{params:{}}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });
});