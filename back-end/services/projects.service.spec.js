import ProjectsService from "./projects.service.js";
import ProjectsDAO from "../dao/projectsDAO.js";

jest.mock("../dao/projectsDAO");
let dao;
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

describe("ProjectsService", () => {
    beforeEach(() => {
        let newDao = new ProjectsDAO();
        dao = newDao;
        ProjectsService.setProjectDAO(dao);
        jest.clearAllMocks();
    });

    describe("Get Filtered Projects", () => {
        it("should correctly call dao with no filters", async () => {
            dao.getProjects.mockReturnValueOnce({
              status: 200,
              data: "meow",
            });
            await ProjectsService.getFilteredProjects({});
            expect(dao.getProjects).toHaveBeenCalledWith({});
        });
        it("should correctly call dao with name filter query", async () => {
            dao.getProjects.mockReturnValueOnce({
              status: 200,
              data: "meow",
            });
            await ProjectsService.getFilteredProjects(QUERY1);
            expect(dao.getProjects).toHaveBeenCalledWith(FILTERS1);
        });
        it("should correctly call dao with id filter query", async () => {
            dao.getProjects.mockReturnValueOnce({
              status: 200,
              data: "meow",
            });
            await ProjectsService.getFilteredProjects(QUERY2);
            expect(dao.getProjects).toHaveBeenCalledWith(FILTERS2);
        });
        it("should correctly throw an error", async () => {
            dao.getProjects.mockImplementationOnce(() =>{
                throw Error;
            } 
            );
            await ProjectsService.getFilteredProjects({});
            expect(dao.getProjects).toHaveBeenCalledWith({});
        });
    });
    describe("Create Projects", () => {
        it("should correctly call dao with the given arguments", async () => {
            dao.createProject.mockReturnValueOnce({
                status: 200,
                data: "meow",
            });
            await ProjectsService.createProject({});
            expect(dao.createProject).toHaveBeenCalledWith({});
        });
        it("should correctly throw an error", async () => {
            dao.createProject.mockImplementationOnce(() => {
                throw Error;
            });
            await ProjectsService.createProject({});
            expect(dao.createProject).toHaveBeenCalledWith({});
        });
    });
    describe("Delete Projects", () => {
        it("should correctly call dao with the given arguments", async () => {
            dao.deleteProject.mockReturnValueOnce({
                status: 200,
                data: "meow",
            });
            await ProjectsService.deleteProject({});
            expect(dao.deleteProject).toHaveBeenCalledWith({});
        });
        it("should correctly throw an error", async () => {
            dao.deleteProject.mockImplementationOnce(() => {
                throw Error;
            });
            await ProjectsService.deleteProject({});
            expect(dao.deleteProject).toHaveBeenCalledWith({});
        });
    });
    describe("Get Projects By Id", () => {
        it("should correctly call dao with the given arguments", async () => {
            dao.getProjectByID.mockReturnValueOnce({
                status: 200,
                data: "meow",
            });
            await ProjectsService.getProjectbyID("6382876295d15a6f70c40f06");
            expect(dao.getProjectByID).toHaveBeenCalledWith("6382876295d15a6f70c40f06");
        });
        it("should correctly throw an error", async () => {
            dao.getProjectByID.mockImplementationOnce(() => {
                throw Error;
            });
            await ProjectsService.getProjectbyID({});
            expect(dao.getProjectByID).toHaveBeenCalledWith({});
        });
    });
});
