import ProjectsDAO from "../dao/projectsDAO.js";

export default class ProjectsService {
  static async createProject(body) {
    try {
        console.log(body);
        await ProjectsDAO.createProject(body);
        return { status: "success" };
    } catch (e) {
        return { status: "failure" };
    }
  }

  static async deleteProject(projectName) {
    try {
        await ProjectsDAO.deleteProject(projectName);
        return { status: "success" };
    } catch (e) {
        return { status: "failure" };
    }
  }

  static async getFilteredProjects({ filters = null } = {}) {
    try {
        let query;
        if (filters) {
            if ("project_name" in filters) {
            query = { project_name: { $eq: filters["project_name"] } };
            } else if ("project_id" in filters) {
            query = { project_id: { $eq: filters["project_id"] } };
            }
        }
        const response = await ProjectsDAO.getProjects(query);

        return {
            status: "success",
            data: response,
        };
    } catch (e) {
        return {
            status: "failure",
            data: [],
        };
    }
  }

  static async updateProject(projectName, transcript){
    try{
        await ProjectsDAO.updateProject(projectName, transcript);
        return { status: "success" };
    }catch(e){
        return { status: "failure" };
    }
  }
}
