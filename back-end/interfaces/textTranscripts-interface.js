/**
 * Abstract Class TextTranscripts.
 *
 * @class Interface
 */
import { EventEmitter } from 'node:events'

export class TextTranscriptsInterface extends EventEmitter{

    /**
     * Get an array of all the text transcripts in MongoDB
     * @returns Array of all the text transcripts from the database
     */

    async getTextTranscripts() {
        throw new Error("not implemented");
    }

    /**
     * Add a single transcript to database
     * @param {String} projectId : Project id associated with a transcipt
     * @param {Array} dialogue : Transcript conversation data
     * @returns
     */
    async addTextTranscript(projectId, dialogue) {
        throw new Error("not implemented");
    }

    /**
     * Deletes the objects in the textTranscripts collection
     * @param {String} project_id : Project id associated with a transcript
     * @return {Promise<void>}
     */
    async flushCollection(project_id) {
        throw new Error("not implemented");
    }

}