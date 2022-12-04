import ProjectsDAO from "../dao/projectsDAO.js";


export default class ProjectsService {
    // Initializing a projects dao so that there is no need to use static in ProjectsDAO.
    static #ProjectsDAO = new ProjectsDAO();

    static setProjectDAO(dao){
        this.#ProjectsDAO = dao;
    }
    /**
     * Gets all projects from the databse that satisfy the filters.
     * @param filters
     * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
     */
    static async getFilteredProjects(query) {
        try {
            let filters={};
            if (query) {
                if (query.project_name) {
                    filters = {project_name: {$eq: query.project_name}};
                } else if (query.project_id) {
                    filters = {project_id: {$eq: query.project_id}};
                }
            }
            const response = await this.#ProjectsDAO.getProjects(filters);
            return {
                status: response.status,
                data: response.data,
            };
        } catch (e) {
            return {
                status: 500,
                data: {error: e.message},
            }
        }
    }


    /**
     * Creates a new project and returns the status.
     * @param body
     * @returns {Promise<{status: string}>}
     */
    static async createProject(body) {
        try {
            const response = await this.#ProjectsDAO.createProject(body);
            return {
                status: response.status,
                data: response.data,
            };
        } catch (e) {
            return {
                status: 500,
                data: {error: e.message},
            }
        }
    }

    /**
     * Deleted a project with the name projectName and returns the status.
     * @param projectName
     * @returns {Promise<{status: string}>}
     */
    static async deleteProject(projectName) {
        try {
            const response = await this.#ProjectsDAO.deleteProject(projectName);
            return {
                status: response.status,
                data: response.data,
            };
        } catch (e) {
            return {
                status: 500,
                data: { error: e.message },
            };
        }
    }


    /**
     * If succuess, returns status and project details of the project with project_id id.
     * Otherwise, returns status failure and empty array.
     * @param id
     * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
     */
    static async getProjectbyID(id) {
        try {
            const response = await this.#ProjectsDAO.getProjectByID(id);
            return {
                status: response.status,
                data: response.data,
            };
        } catch (e) {
            return {
                status: "failure",
                data: { error: e.message },
            };
        }
    }

}
