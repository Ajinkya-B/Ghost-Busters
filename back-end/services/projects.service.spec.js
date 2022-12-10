import ProjectsService from "./projects.service.js";
import { ProjectsInterface } from "../interfaces/projects-interface.js";
import { OutputBoundaryInterface } from "../interfaces/output-boundary-interface.js";
import ProjectsDAO from "../dao/projectsDAO.js";

jest.mock("../interfaces/input-boundary-interface.js");
jest.mock("../interfaces/projects-interface.js");
jest.mock("../dao/projectsDAO.js");
jest.mock("../interfaces/output-boundary-interface.js");

let dao;
let projectsService;
let outputBoundary;

const QUERY1 = {
    project_name: "Antighost Ghost Club Clothing Store"
};
const FILTERS1 = {
    project_name: { $eq: QUERY1.project_name }
};
const QUERY2 = {
    project_id: "6382876295d15a6f70c40f06"
};
const FILTERS2 = {
    project_id: {$eq: QUERY2.project_id}
};
const PROJECT_ID = "6382876295d15a6f70c40f06";

describe("ProjectsService", () => {
    beforeEach(() => {
        outputBoundary = OutputBoundaryInterface;
        dao = new ProjectsInterface();
        projectsService = new ProjectsService();
        jest.clearAllMocks();
    });

    describe("Get Filtered Projects", () => {
        it("should correctly call dao with no filters", async () => {
            dao.getProjects.mockReturnValueOnce({
              status: 200,
              data: "meow",
            });
            await projectsService.getFilteredProjects(outputBoundary, dao, {});
            expect(dao.getProjects).toHaveBeenCalledWith({});
        });
        it("should correctly call dao with name filter query", async () => {
            dao.getProjects.mockReturnValueOnce({
              status: 200,
              data: "meow",
            });
            await projectsService.getFilteredProjects(outputBoundary, dao, QUERY1);
            expect(dao.getProjects).toHaveBeenCalledWith(FILTERS1);
        });
        it("should correctly call dao with id filter query", async () => {
            dao.getProjects.mockReturnValueOnce({
              status: 200,
              data: "meow",
            });
            await projectsService.getFilteredProjects(outputBoundary, dao, QUERY2);
            expect(dao.getProjects).toHaveBeenCalledWith(FILTERS2);
        });
        it("should correctly throw an error", async () => {
            dao.getProjects.mockImplementationOnce(() => {
                throw Error;
            } 
            );
            await projectsService.getFilteredProjects(outputBoundary, dao, {});
            expect(dao.getProjects).toHaveBeenCalledWith({});
        });
    });
    describe("Create Projects", () => {
        it("should correctly call dao with the given arguments", async () => {
            dao.createProject.mockReturnValueOnce({
                status: 200,
                data: "meow",
            });
            await projectsService.createProject(outputBoundary, dao, {});
            expect(dao.createProject).toHaveBeenCalledWith({});
        });
        it("should correctly throw an error", async () => {
            dao.createProject.mockImplementationOnce(() => {
                throw Error;
            });
            await projectsService.createProject(outputBoundary, dao, {});
            expect(dao.createProject).toHaveBeenCalledWith({});
        });
    });
    describe("Delete Projects", () => {
        it("should correctly call dao with the given arguments", async () => {
            dao.deleteProject.mockReturnValueOnce({
                status: 200,
                data: "meow",
            });
            await projectsService.deleteProject(outputBoundary, dao, {});
            expect(dao.deleteProject).toHaveBeenCalledWith({});
        });
        it("should correctly throw an error", async () => {
            dao.createProject.mockImplementationOnce(() => {
                throw Error;
            });
            await projectsService.deleteProject(outputBoundary, dao, "meow");
            expect(dao.deleteProject).toHaveBeenCalledWith("meow");
        });
    });
    describe("Get Projects By Id", () => {
        it("should correctly call dao with the given arguments", async () => {
            dao.getProjectByID.mockReturnValueOnce({
                status: 200,
                data: "meow",
            });
            await projectsService.getProjectbyID(outputBoundary, dao, PROJECT_ID);
            expect(dao.getProjectByID).toHaveBeenCalledWith(PROJECT_ID);
        });
        it("should correctly throw an error", async () => {
            dao.getProjectByID.mockImplementationOnce(() => {
                throw Error;
            });
            await projectsService.getProjectbyID(outputBoundary, dao, PROJECT_ID);
            expect(dao.getProjectByID).toHaveBeenCalledWith(PROJECT_ID);
        });
    });
});
