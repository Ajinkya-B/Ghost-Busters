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
     *  @returns A list of project objects
     * @param query
     **/
    async createProject(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * @returns {Promise<{error}|*>}
     * @param query
     */
    async deleteProject(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * Also, add parsed and trimmed transcripts corresponding to that project to the project object.
     * @returns {Promise<*>}
     * @param query
     */
    async getProjectByID(query = {}) {
        throw new Error("not implemented");
    }
}