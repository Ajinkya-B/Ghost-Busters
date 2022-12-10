import {ProjectsInterface} from "../interfaces/projects-interface.js";
import {InputBoundaryInterface} from "../interfaces/input-boundary-interface.js";


export default class ProjectsService extends InputBoundaryInterface {

    /**
     * Gets all projects from the database that satisfy the filters.
     * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
     * @param outputBoundary Object which passes the returned data back to the controller
     * @param dao Instance of DAO which the projects are querryed from
     * @param query An id of a project that you want to search the database for
     */
    async getFilteredProjects(outputBoundary, dao, query) {
        if (dao instanceof ProjectsInterface) {
            try {
            let filters={};
            if (query) {
                if (query.project_name) {
                    filters = {project_name: {$eq: query.project_name}};
                } else if (query.project_id) {
                    filters = {project_id: {$eq: query.project_id}};
                }
            }
            const response = await dao.getProjects(filters);
            outputBoundary.setOutput( {
                status: response.status,
                data: response.data,
            })
        } catch (e) {
            outputBoundary.setOutput({
                status: 500,
                data: {error: e.message},
            })
        }
        } else {
            throw new Error("not an ProjectInterface");
        }
    }


    /**
     * Creates a new project and returns the status.
     * @param outputBoundary Object which passes the returned data back to the controller
     * @param dao Instance of DAO which the projects are querryed from
     * @param body Contains the project_id as well as the api key that is added to identify each project
     * @returns {Promise<{status: string}>}
     */
     async createProject(outputBoundary, dao, body) {
        if (dao instanceof ProjectsInterface) {
            try {
                const response = await dao.createProject(body);
                outputBoundary.setOutput({
                    status: response.status,
                    data: response.data,
                });
            } catch (e) {
                outputBoundary.setOutput({
                    status: 500,
                    data: {error: e.message},
                })
            }
        } else {
            throw new Error("not an ProjectInterface");
        }
    }

    /**
     * Deleted a project with the name projectName and returns the status.
     * @param outputBoundary Object which passes the returned data back to the controller
     * @param dao Instance of DAO which the projects are querryed from
     * @param projectName Name of the project you wish to delete
     * @returns {Promise<{status: string}>}
     */
    async deleteProject(outputBoundary, dao, projectName) {
        if (dao instanceof ProjectsInterface) {
            try {
                const response = await dao.deleteProject(projectName);
                return {
                    status: response.status,
                    data: response.data,
                };
            } catch (e) {
                outputBoundary.setOutput({
                    status: 500,
                    data: { error: e.message },
                })
            }
        } else {
            throw new Error("not an ProjectInterface");
        }
    }


    /**
     * If succuess, returns status and project details of the project with project_id id.
     * Otherwise, returns status failure and empty array.
     * @param outputBoundary Object which passes the returned data back to the controller
     * @param dao Instance of DAO which the projects are querryed from
     * @param id project_id you want to search for in the database
     * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
     */
    async getProjectbyID(outputBoundary, dao, id) {
        if (dao instanceof ProjectsInterface) {
            try {
                const response = await dao.getProjectByID(id);
                outputBoundary.setOutput({
                    status: response.status,
                    data: response.data,
                })
            } catch (e) {
                outputBoundary.setOutput({
                    status: 500,
                    data: { error: e.message },
                })
            }
        } else {
            throw new Error("not an ProjectInterface");
        }
    }

}
