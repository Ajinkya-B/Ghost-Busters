import ProjectsDAO from "../dao/projectsDAO.js";


export default class ProjectsService {
    // Initializing a projects dao so that there is no need to use static in ProjectsDAO.
    static #ProjectsDAO = new ProjectsDAO;

    /**
     * Creates a new project and returns the status.
     * @param body
     * @returns {Promise<{status: string}>}
     */
    static async createProject(body) {
        try {
            console.log(body);
            await this.#ProjectsDAO.createProject(body);
            return {status: "success"};
        } catch (e) {
            return {status: "failure"};
        }
    }

    /**
     * Deleted a project with the name projectName and returns the status.
     * @param projectName
     * @returns {Promise<{status: string}>}
     */
    static async deleteProject(projectName) {
        try {
            await this.#ProjectsDAO.deleteProject(projectName);
            return {status: "success"};
        } catch (e) {
            return {status: "failure"};
        }
    }


    /**
     * Gets all projects from the databse that satisfy the filters.
     * @param filters
     * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
     */
    static async getFilteredProjects({filters = null} = {}) {
        try {
            let query;
            if (filters) {
                if ("project_name" in filters) {
                    query = {project_name: {$eq: filters["project_name"]}};
                } else if ("version_id" in filters) {
                    query = {version_id: {$eq: filters["version_id"]}};
                }
            }
            const response = await this.#ProjectsDAO.getProjects(query);

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

    /**
     *
     * @param projectName
     * @param transcript
     * @returns {Promise<{status: string}>}
     */
    static async updateProject(projectName, transcript) {
        try {
            await this.#ProjectsDAO.updateProject(projectName, transcript);
            return {status: "success"};
        } catch (e) {
            return {status: "failure"};
        }
    }

    /**
     * If success, returns status and project details of the project with the version_id.
     * Otherwise, returns status failure and empty array.
     * @param id
     * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
     */
    static async getProjectbyID(id) {
        try {

            const response = await this.#ProjectsDAO.getProjectByID(id);
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

}
