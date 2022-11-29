import {ProjectsInterface} from "../interfaces/projects-interface.js";


export default class ProjectsService {
    // Initializing a projects dao so that there is no need to use static in ProjectsDAO.
    // static #ProjectsDAO = new ProjectsDAO();

    /**
     * Gets all projects from the databse that satisfy the filters.
     * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
     * @param dao
     * @param query
     */
    static async getFilteredProjects(dao, query) {
        if (dao instanceof ProjectsInterface) {
            try {
            let filters;
            if (query) {
                if (query.project_name) {
                    filters = {project_name: {$eq: query.project_name}};
                } else if (query.project_id) {
                    filters = {project_id: {$eq: query.project_id}};
                }
            }
            const response = await dao.getProjects(filters);
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
        } else {
            throw new Error("not an ProjectInterface");
        }
    }


    /**
     * Creates a new project and returns the status.
     * @param dao
     * @param body
     * @returns {Promise<{status: string}>}
     */
    static async createProject(dao, body) {
        if (dao instanceof ProjectsInterface) {
            try {
                const response = await dao.createProject(body);
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
        } else {
            throw new Error("not an ProjectInterface");
        }
    }

    /**
     * Deleted a project with the name projectName and returns the status.
     * @param dao
     * @param projectName
     * @returns {Promise<{status: string}>}
     */
    static async deleteProject(dao, projectName) {
        if (dao instanceof ProjectsInterface) {
            try {
                const response = await dao.deleteProject(projectName);
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
        } else {
            throw new Error("not an ProjectInterface");
        }
    }


    /**
     * If succuess, returns status and project details of the project with project_id id.
     * Otherwise, returns status failure and empty array.
     * @param dao
     * @param id
     * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
     */
    static async getProjectbyID(dao, id) {
        if (dao instanceof ProjectsInterface) {
            try {
                const response = await dao.getProjectByID(id);
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
        } else {
            throw new Error("not an ProjectInterface");
        }
    }

}

