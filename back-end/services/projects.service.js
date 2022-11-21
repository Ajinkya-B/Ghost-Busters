import ProjectsDAO from "../dao/projectsDAO.js";


export default class ProjectsService {

    /**
     * Creates a new project and returns the status.
     * @param body
     * @returns {Promise<{status: string}>}
     */
    static async createProject(body) {
        try {
            console.log(body);
            await ProjectsDAO.createProject(body);
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
            await ProjectsDAO.deleteProject(projectName);
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
                } else if ("project_id" in filters) {
                    query = {project_id: {$eq: filters["project_id"]}};
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

    /**
     *
     * @param projectName
     * @param transcript
     * @returns {Promise<{status: string}>}
     */
    static async updateProject(projectName, transcript) {
        try {
            await ProjectsDAO.updateProject(projectName, transcript);
            return {status: "success"};
        } catch (e) {
            return {status: "failure"};
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

            const response = await ProjectsDAO.getProjectByID(id);
            return {
                status: "success",
                data: response,
            };
        } catch (e) {
            return {
                status: "failure",
                data: [],
            };
            //     if (!project) {
            //         res.status(404).json({ error: "Not found" });
            //         return;
            //     }
            //     res.json(project);
            // } catch (e) {
            //     console.log(`api, ${e}`);
            //     res.status(500).json({ error: e });
            // }


        }
    }

}

