/**
 * Abstract Class Projects.
 *
 * @class Interface
 */
import { EventEmitter } from 'node:events'

export class ProjectsInterface extends EventEmitter{

    /**
     * Get the projects that match the query from MongoDB
     * @param {Object} query Filters for projects
     * @returns A list of project objects
     */
    async getProjects(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * Create a project object in MongoDB (see AddProject.js in /front-end for more info).
     * @param {Object} body A project object that has project data
     * @returns A list of project objects
     */
    async createProject(body ) {
        throw new Error("not implemented");
    }

    /**
     * Delete the project object with the name projectName from the database.
     * @param {String} projectName Name of the project to be deleted
     * @returns {Promise<{error}|*>}
     */
    async deleteProject(projectName ) {
        throw new Error("not implemented");
    }

    /**
     * Get a project object with a particular id from MongoDB.
     * Also, add parsed and trimmed transcripts corresponding to that project to the project object.
     * @param id the id of the current project that must be analyzed
     * @returns {Promise<*>}
     */
    async getProjectByID(id) {
        throw new Error("not implemented");
    }
}