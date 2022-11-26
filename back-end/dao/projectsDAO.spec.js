import { Projects } from "../schema/projects-schema.js"
import ProjectsDAO from "./projectsDAO.js"

jest.mock("../schema/projects-schema.js");

let dao;

describe("ProjectsDao", () => {
    beforeEach(() => {
        const newDao = new ProjectsDAO();
        dao = newDao;
        jest.clearAllMocks();
    });
    it("Should correctly get intents", async () => {
        await dao.getProjects();
        expect(Projects.find).toHaveBeenCalled();
    });

    it("Should correctly get intents with query", async () => {
        const query = { bark: "woof" };
        await dao.getProjects(query);
        expect(Projects.find).toHaveBeenCalledWith(query);
    });
});
