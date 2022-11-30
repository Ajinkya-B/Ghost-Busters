import ProjectsController from "./projects.controller.js";
import ProjectsService from "../../services/projects.service.js"

jest.mock("../../services/projects.service.js");

const mockResponse = () => {
    let res = {};
    res = {
        status: () => res,
        json: jest.fn().mockImplementation((obj) => obj),
        error: "error",
    };
    return res;
};


describe("ProjectsController", () => {
    describe("Api Get Filtered Projects", () => {
        it("Should correctly get a project ", async () => {
            const res = mockResponse();
            ProjectsService.getFilteredProjects = jest.fn().mockReturnValue({
                status: 200,
                data: "meow",
            });
            await ProjectsController.apiGetFilteredProjects({}, res, {});
            expect(ProjectsService.getFilteredProjects).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("meow");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            ProjectsService.getFilteredProjects = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await ProjectsController.apiGetFilteredProjects({}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api Create Project", () => {
        it("Should correctly create a project ", async () => {
            const res = mockResponse();
            ProjectsService.createProject = jest.fn().mockReturnValue({
                status: 200,
                data: "successfully created project",
            });
            await ProjectsController.apiCreateProject({}, res, {});
            expect(ProjectsService.createProject).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("successfully created project");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            ProjectsService.createProject = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await ProjectsController.apiCreateProject({}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api Delete Project", () => {
        it("Should correctly delete a project ", async () => {
            const res = mockResponse();
            ProjectsService.deleteProject = jest.fn().mockReturnValue({
                status: 200,
                data: "successfully deleted project",
            });
            await ProjectsController.apiDeleteProject({body:{project_name: "meow"}}, res, {});
            expect(ProjectsService.deleteProject).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("successfully deleted project");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            ProjectsService.deleteProject = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await ProjectsController.apiDeleteProject({body:{project_name: "meow"}}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });
    
    describe("Api Get Project By Id", () => {
        it("Should correctly get project by id ", async () => {
            const res = mockResponse();
            ProjectsService.getProjectbyID = jest.fn().mockReturnValue({
                status: 200,
                data: "meow",
            });
            await ProjectsController.apiGetProjectByID({params:{}}, res, {});
            expect(ProjectsService.getProjectbyID).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("meow");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            ProjectsService.getProjectbyID = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await ProjectsController.apiGetProjectByID({params:{}}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });
});