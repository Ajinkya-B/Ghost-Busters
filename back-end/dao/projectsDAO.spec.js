import { Projects } from "../schema/projects-schema.js"
import ProjectsDAO from "./projectsDAO.js"

jest.mock("../schema/projects-schema.js");

let dao;
const SAMPLE_PROJECT = {
    project_name: "Test",
    project_id: "1234",
    api_key: "abcd",
    transcripts: []
}

describe("ProjectsDao", () => {
    beforeEach(async() => {
        const newDao = new ProjectsDAO();
        dao = newDao;
        await dao.createProject(SAMPLE_PROJECT);
        jest.clearAllMocks();
    });
    it("Should correctly get projects", async () => {
        await dao.getProjects();
        expect(Projects.find).toHaveBeenCalled();
    });

    it("Should correctly get projects with query", async () => {
        const query = { bark: "woof" };
        await dao.getProjects(query);
        expect(Projects.find).toHaveBeenCalledWith(query);
    });

    it("Should correctly get the right projects1", async () => {
      const res = await dao.getProjects();
      console.log(res);
      expect(res !== []).toBe(true);
    });
});
