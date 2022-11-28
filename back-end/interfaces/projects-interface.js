/**
 * Abstract Class Projects.
 *
 * @class Interface
 */
import { EventEmitter } from 'node:events'

export class ProjectsInterface extends EventEmitter{

    /**
     *  @param {Object} query find specific intent(s)
     *  @emit {Query} the queried items
     * */

    async getProjects(query = {}) {
        throw new Error("not implemented");
    }

    /**
     *  @param {Object} body A project object that has project data
     *  @returns A list of project objects
     **/
    async createProject(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * @param {String} projectName Name of the project to be deleted
     * @returns {Promise<{error}|*>}
     */
    async deleteProject(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * Also, add parsed and trimmed transcripts corresponding to that project to the project object.
     * @param id
     * @returns {Promise<*>}
     */
    async getProjectByID(query = {}) {
        throw new Error("not implemented");
    }
}