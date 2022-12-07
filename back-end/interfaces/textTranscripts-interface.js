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
     * Add a text transcript object into the database
     * @returns
     * @param projectId
     * @param dialogue
     */
    async addTextTranscript(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * Deletes the objects in the textTranscripts collection
     * @return {Promise<void>}
     */
    async flushDatabase(query = {}) {
        throw new Error("not implemented");
    }

}